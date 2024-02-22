import { observer } from "mobx-react-lite";
import {
  RepositoryCard,
  TRepositoryCard,
} from "../repository-card/RepositoryCard";
import MainStore from "../../store/MainStore";

export const FavoriteRepositoriesList: React.FC = observer(() => {
  return (
    <>
      {MainStore.favoriteRepositories.map((repository: TRepositoryCard) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </>
  );
});
