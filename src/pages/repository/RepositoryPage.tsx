import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { StyledLink } from "../../components/repository-card/RepositoryCardStyles";
import MainStore from "../../store/MainStore";
import { BUTTONS_TEXT, ERRORS_TEXT } from "../../utils/constants";
import { RepositoryCardMore } from "../../components/repository-card-more/RepositoryCardMore";
import { Container } from "../search/SearchPageStyles";

export const RepositoryPage = observer(() => {
  const { repositoryId } = useParams();

  if (!repositoryId) {
    return (
      <>
        <StyledLink to={"/github-search/"}>Back</StyledLink>{" "}
        <div>{ERRORS_TEXT.noRepositoriesFound}</div>
      </>
    );
  }

  const repositoryCard = MainStore.repositories.find(
    (repository) => repository.id === +repositoryId
  );

  if (!repositoryCard) {
    return (
      <>
        <StyledLink to={"/github-search/"}>{BUTTONS_TEXT.back}</StyledLink>
        <div>{ERRORS_TEXT.noRepositoriesFound}</div>
      </>
    );
  }

  return (
    <Container>
      <StyledLink to={"/github-search/"}>{BUTTONS_TEXT.back}</StyledLink>
      <RepositoryCardMore key={repositoryId} repositoryProps={repositoryCard} />
    </Container>
  );
});
