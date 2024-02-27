import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { StyledLink } from "../../entities/RepositoryCard/RepositoryCardStyles";
import MainStore from "../../store/MainStore";
import { BUTTONS_TEXT, INFO_TEXT } from "../../shared/constants/text-constants";
import { RepositoryCardMore } from "../../entities/RepositoryCardMore/RepositoryCardMore";
import { Container } from "../SearchPage/SearchPageStyles";

export const RepositoryPage = observer(() => {
  const { repositoryId } = useParams();

  if (!repositoryId) {
    return (
      <>
        <StyledLink to={"/github-search/"}>Back</StyledLink>{" "}
        <div>{INFO_TEXT.noRepositoriesFound}</div>
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
        <div>{INFO_TEXT.noRepositoriesFound}</div>
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
