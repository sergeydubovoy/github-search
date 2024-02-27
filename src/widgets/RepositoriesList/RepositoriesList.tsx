import { observer } from "mobx-react-lite";
import {
  RepositoryCard,
  TRepositoryCard,
} from "../../entities/RepositoryCard/RepositoryCard";
import MainStore from "../../store/MainStore";
import { INFO_TEXT } from "../../shared/constants/text-constants";

export const RepositoriesList: React.FC = observer(() => {
  return (
    <>
      {!MainStore.repositories && INFO_TEXT.noRepositoriesFound}
      {MainStore.repositories &&
        MainStore.repositories.map((repository: TRepositoryCard) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
    </>
  );
});
