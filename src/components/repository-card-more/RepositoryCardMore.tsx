import { observer } from "mobx-react-lite";
import { TRepositoryCard } from "../repository-card/RepositoryCard";

import MainStore from "../../store/MainStore";
import { RepositoryLink } from "../repository-link/RepositoryLink";
import {
  DescriptionText,
  DescriptionWrapper,
  FavoriteButtonInner,
  InfoWrapper,
  RepositoryCardWrapper,
  RepositoryImage,
  RepositoryInfoWrapper,
  RepositoryStatsWrapper,
  RepositoryTitle,
  StatWrapper,
} from "./RepositoryCardMoreStyles";
import {
  BUTTONS_TEXT,
  DESCRIPTION_TITLES,
  ERRORS_TEXT,
} from "../../utils/constants";
import { FavoriteIcon } from "../../assets/FavoriteIcon";
import { StarIcon } from "../../assets/StarIcon";
import { ForkIcon } from "../../assets/ForkIcon";
import { ListTitle } from "../../pages/search/SearchPageStyles";
import { FavoriteButton } from "../buttons/favorite-button/FavoriteButton";
import { Colors } from "../../style/styles";

type TRepositoryMoreInfo = {
  id: string | number;
  full_name: string;
  html_url: string;
  stargazers_count: string;
  forks_count: string | undefined;
  description: string;
  language: string;
  isFavorite: boolean;
  repository: TRepositoryCard;
  owner: TOwner;
};

type TOwner = {
  login: string;
  html_url: string;
  avatar_url: string;
};

type TRepositoryMoreInfoProps = {
  repositoryProps: TRepositoryMoreInfo;
};

export const RepositoryCardMore: React.FC<TRepositoryMoreInfoProps> = observer(
  ({ repositoryProps }) => {
    return (
      <>
        <RepositoryCardWrapper id={String(repositoryProps.id)}>
          <RepositoryInfoWrapper>
            <RepositoryLink link={repositoryProps.html_url}>
              <RepositoryImage
                src={repositoryProps.owner.avatar_url}
              ></RepositoryImage>
            </RepositoryLink>
            <InfoWrapper>
              <RepositoryLink link={repositoryProps.html_url}>
                <RepositoryTitle>
                  {repositoryProps.full_name
                    ? repositoryProps.full_name
                    : ERRORS_TEXT.noRepositoryTitle}
                </RepositoryTitle>
              </RepositoryLink>
              <RepositoryStatsWrapper>
                <StatWrapper>
                  <StarIcon />
                  {repositoryProps.stargazers_count
                    ? repositoryProps.stargazers_count
                    : ERRORS_TEXT.noStars}
                </StatWrapper>
                <StatWrapper>
                  <ForkIcon />
                  {repositoryProps.forks_count
                    ? repositoryProps.forks_count
                    : ERRORS_TEXT.noForks}
                </StatWrapper>
              </RepositoryStatsWrapper>
              <FavoriteButton
                onClick={() => MainStore.toggleFavorite(repositoryProps)}
              >
                <FavoriteButtonInner>
                  {MainStore.favoriteRepositories.some(
                    (favoriteRepository) =>
                      favoriteRepository.id === repositoryProps.id
                  )
                    ? BUTTONS_TEXT.addedToFavorite
                    : BUTTONS_TEXT.addToFavorite}
                  <FavoriteIcon
                    fill={
                      MainStore.favoriteRepositories.some(
                        (favoriteRepository) =>
                          favoriteRepository.id === repositoryProps.id
                      )
                        ? Colors.brightBlue
                        : "none"
                    }
                    stroke={
                      MainStore.favoriteRepositories.some(
                        (favoriteRepository) =>
                          favoriteRepository.id === repositoryProps.id
                      )
                        ? Colors.brightBlue
                        : Colors.grey
                    }
                  />
                </FavoriteButtonInner>
              </FavoriteButton>
            </InfoWrapper>
          </RepositoryInfoWrapper>
        </RepositoryCardWrapper>
        <DescriptionWrapper>
          <ListTitle>{DESCRIPTION_TITLES.description}</ListTitle>
          <DescriptionText>{repositoryProps.description}</DescriptionText>
          <ListTitle>{DESCRIPTION_TITLES.language}</ListTitle>
          <DescriptionText>{repositoryProps.language}</DescriptionText>
        </DescriptionWrapper>
      </>
    );
  }
);
