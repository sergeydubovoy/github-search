import { observer } from "mobx-react-lite";
import {
  RepositoryCard,
  TRepositoryCard,
} from "../RepositoryCard/RepositoryCard";
import MainStore from "../../store/MainStore";
import { NO_FAVORITE_REPOSITORIES } from "../../utils/constants";

export const FavoriteRepositoriesList: React.FC = observer(() => {
  return (
    <>
      {!MainStore.favoriteRepositories && NO_FAVORITE_REPOSITORIES}
      {MainStore.favoriteRepositories.map((repository: TRepositoryCard) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </>
  );
});
