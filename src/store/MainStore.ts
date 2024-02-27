import { autorun, makeAutoObservable, runInAction } from "mobx";
import { TRepositoryCard } from "../entities/RepositoryCard/RepositoryCard";
import { getRepositories } from "../shared/api/GitHubAPI";

class MainStore {
  title: string = "";
  copiedTitle: string = "";
  repositories: TRepositoryCard[] = [];
  favoriteRepositories: TRepositoryCard[] = [];
  isFavorite: boolean = false;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);

    this.loadFromLocalStorage();

    autorun(() => {
      const data = {
        repositories: this.repositories,
        favoriteRepositories: this.favoriteRepositories,
        title: this.title,
        isFavorite: this.isFavorite,
      };
      localStorage.setItem("GitHubSearchRepository", JSON.stringify(data));
    });
  }

  loadFromLocalStorage() {
    const loadedRepositories = JSON.parse(
      localStorage.getItem("GitHubSearchRepository") || "{}"
    );
    this.repositories = loadedRepositories.repositories || [];
    this.favoriteRepositories = loadedRepositories.favoriteRepositories || [];
    this.title = loadedRepositories.title || "";
    this.isFavorite = loadedRepositories.isFavorite || false;
  }

  async loadRepositories(title: string, perPage: number) {
    this.isLoading = true;
    const loadedRepositories = await getRepositories(title, perPage);
    runInAction(() => {
      this.repositories = loadedRepositories;
      this.isLoading = false;
    });
  }

  async toggleFavorite(repository: TRepositoryCard) {
    const index = this.favoriteRepositories.findIndex(
      (card) => card.id === repository.id
    );
    if (index !== -1) {
      runInAction(() => {
        this.favoriteRepositories.splice(index, 1);
      });
    } else {
      const updatedRepository = { ...repository, isFavorite: true };
      runInAction(() => {
        this.favoriteRepositories.push(updatedRepository);
      });
    }
  }

  handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.title = event.currentTarget.value.trim();
  };

  handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
}

export default new MainStore();
