import { observer } from "mobx-react-lite";
import { TRepositoryCard } from "../RepositoryCard/RepositoryCard";

import MainStore from "../../store/MainStore";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { RepositoryLink } from "../RepositoryLink/RepositoryLink";
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
import { FavoriteIconFilled } from "../../assets/FavoriteIcons/FavoriteIconFilled";
import { FavoriteIconOutline } from "../../assets/FavoriteIcons/FavoriteIconOutline";
import { StarIcon } from "../../assets/StarIcon";
import { ForkIcon } from "../../assets/ForkIcon";
import { ListTitle } from "../../pages/SearchPage/SearchPageStyles";

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
                {MainStore.favoriteRepositories.some(
                  (favoriteRepository) =>
                    favoriteRepository.id === repositoryProps.id
                ) ? (
                  <FavoriteButtonInner>
                    {BUTTONS_TEXT.addedToFavorite}
                    <FavoriteIconFilled />
                  </FavoriteButtonInner>
                ) : (
                  <FavoriteButtonInner>
                    {BUTTONS_TEXT.addToFavorite}
                    <FavoriteIconOutline />
                  </FavoriteButtonInner>
                )}
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
