import { observer } from "mobx-react-lite";
import {
  RepositoryCard,
  TRepositoryCard,
} from "../RepositoryCard/RepositoryCard";
import MainStore from "../../store/MainStore";
import { ERRORS_TEXT } from "../../utils/constants";

export const RepositoriesList: React.FC = observer(() => {
  return (
    <>
      {!MainStore.repositories && ERRORS_TEXT.noRepositoriesFound}
      {MainStore.repositories &&
        MainStore.repositories.map((repository: TRepositoryCard) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
    </>
  );
});
