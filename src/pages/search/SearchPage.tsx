import clipboardCopy from "clipboard-copy";
import debounce from "lodash.debounce";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { CopyButton } from "../../components/buttons/copy-button/CopyButton";
import { FavoriteRepositoriesList } from "../../components/favorite-repositories-list/FavoriteRepositoriesList";
import { Heading } from "../../components/heading/Heading";
import { Input } from "../../components/input/Input";
import { Loader } from "../../components/loader/Loader";
import { RepositoriesList } from "../../components/repositories-list/RepositoriesList";
import { SearchForm } from "../../components/search-form/SearchForm";
import { SelectorPerPage } from "../../components/selector-per-page/SelectorPerPage";
import MainStore from "../../store/MainStore";
import {
  BUTTONS_TEXT,
  ERRORS_TEXT,
  HEADING,
  INPUT_TEXT,
  LIST_TITLES,
  NO_FAVORITE_REPOSITORIES,
} from "../../utils/constants";
import {
  Container,
  ListTitle,
  ListWrapper,
  RepositoriesListWrapper,
} from "./SearchPageStyles";

export const SearchPage: React.FC = observer(() => {
  const [copyButtonTitle, setCopyButtonTitle] = useState("Copy");
  const [perPage, setPerPage] = useState<number>(12);

  useEffect(() => {
    const debouncedFetch = debounce(() => {
      MainStore.loadRepositories(MainStore.title, perPage);
    }, 1000);

    if (MainStore.title) {
      debouncedFetch();
    }
    return () => {
      debouncedFetch.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MainStore.title, perPage]);

  const handlePerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPage(Number(event.target.value));
  };

  const handleCopyButton = async () => {
    setCopyButtonTitle(BUTTONS_TEXT.copied);
    await clipboardCopy(MainStore.title);
    setTimeout(() => {
      setCopyButtonTitle(BUTTONS_TEXT.copy);
    }, 2000);
  };

  return (
    <Container>
      <Heading text={HEADING} />
      <SearchForm onSubmit={MainStore.handleFormSubmit}>
        <Input
          value={MainStore.title}
          name={INPUT_TEXT.name}
          placeholder={INPUT_TEXT.placeholder}
          onInput={MainStore.handleInputChange}
        />
        <CopyButton
          title={copyButtonTitle}
          onClick={() => handleCopyButton()}
        />
      </SearchForm>
      <SelectorPerPage onChange={handlePerPage} />
      <RepositoriesListWrapper>
        <ListWrapper>
          <ListTitle>{LIST_TITLES.result}</ListTitle>
          {MainStore.isLoading ? <Loader /> : <RepositoriesList />}
          {MainStore.repositories.length === 0 &&
            ERRORS_TEXT.noRepositoriesFound}
        </ListWrapper>
        <ListWrapper>
          <ListTitle>{LIST_TITLES.favorite}</ListTitle>
          {MainStore.favoriteRepositories.length ? (
            <FavoriteRepositoriesList />
          ) : (
            NO_FAVORITE_REPOSITORIES
          )}
        </ListWrapper>
      </RepositoriesListWrapper>
    </Container>
  );
});
