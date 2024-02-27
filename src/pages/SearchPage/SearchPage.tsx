import clipboardCopy from "clipboard-copy";
import debounce from "lodash.debounce";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { CopyButton } from "../../shared/ui/buttons/CopyButton/CopyButton";
import { FavoriteRepositoriesList } from "../../widgets/FavoriteRepositoriesList/FavoriteRepositoriesList";
import { Heading } from "../../shared/ui/components/Heading/Heading";
import { Input } from "../../shared/ui/components/Input/Input";
import { Loader } from "../../shared/ui/components/Loader/Loader";
import { RepositoriesList } from "../../widgets/RepositoriesList/RepositoriesList";
import { SearchForm } from "../../widgets/SearchForm/SearchForm";
import { ItemsPerPageSelect } from "../../features/ItemsPerPageSelect/ItemsPerPageSelect";
import MainStore from "../../store/MainStore";
import {
  BUTTONS_TEXT,
  INFO_TEXT,
  INPUT_TEXT,
  TITLES,
} from "../../shared/constants/text-constants";
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
      <Heading text={TITLES.heading} />
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
      <ItemsPerPageSelect onChange={handlePerPage} />
      <RepositoriesListWrapper>
        <ListWrapper>
          <ListTitle>{TITLES.result}</ListTitle>
          {MainStore.isLoading ? <Loader /> : <RepositoriesList />}
          {MainStore.repositories.length === 0 && INFO_TEXT.noRepositoriesFound}
        </ListWrapper>
        <ListWrapper>
          <ListTitle>{TITLES.favorite}</ListTitle>
          {MainStore.favoriteRepositories.length ? (
            <FavoriteRepositoriesList />
          ) : (
            INFO_TEXT.noFavoriteRepositories
          )}
        </ListWrapper>
      </RepositoriesListWrapper>
    </Container>
  );
});
