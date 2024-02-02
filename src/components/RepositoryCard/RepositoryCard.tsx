import { observer } from "mobx-react-lite";
import MainStore from "../../store/MainStore";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { ERRORS_TEXT, BUTTONS_TEXT } from "../../utils/constants";
import { RepositoryLink } from "../RepositoryLink/RepositoryLink";
import {
  RepositoryButtonsWrapper,
  RepositoryCardWrapper,
  RepositoryImage,
  RepositoryInfoWrapper,
  RepositoryStatsWrapper,
  RepositoryTitle,
  StatWrapper,
  StyledLink,
} from "./RepositoryCardStyles";
import { FavoriteIconFilled } from "../../assets/FavoriteIcons/FavoriteIconFilled";
import { FavoriteIconOutline } from "../../assets/FavoriteIcons/FavoriteIconOutline";
import { ForkIcon } from "../../assets/ForkIcon";
import { StarIcon } from "../../assets/StarIcon";

export type TRepositoryCard = {
  id: number | string;
  full_name: string;
  html_url: string;
  link?: string;
  stargazers_count: string;
  forks_count: string | undefined;
  isFavorite: boolean;
  description: string;
  language: string;
  owner: TOwner;
  repository: TRepositoryCard;
};

type TOwner = {
  login: string;
  html_url: string;
  avatar_url: string;
};

type TRepositoryProps = {
  repository: TRepositoryCard;
};

export const RepositoryCard: React.FC<TRepositoryProps> = observer(
  ({ repository }) => {
    return (
      <RepositoryCardWrapper id={String(repository.id)}>
        <RepositoryInfoWrapper>
          <RepositoryLink link={repository.html_url}>
            <RepositoryImage
              src={repository.owner.avatar_url}
            ></RepositoryImage>
            <RepositoryTitle>
              {repository.full_name
                ? repository.full_name
                : ERRORS_TEXT.noRepositoryTitle}
            </RepositoryTitle>
          </RepositoryLink>
          <RepositoryStatsWrapper>
            <StatWrapper>
              <StarIcon />
              {repository.stargazers_count
                ? repository.stargazers_count
                : ERRORS_TEXT.noStars}
            </StatWrapper>
            <StatWrapper>
              <ForkIcon />
              {repository.forks_count
                ? repository.forks_count
                : ERRORS_TEXT.noForks}
            </StatWrapper>
          </RepositoryStatsWrapper>
        </RepositoryInfoWrapper>
        <RepositoryButtonsWrapper>
          <FavoriteButton onClick={() => MainStore.toggleFavorite(repository)}>
            {MainStore.favoriteRepositories.some(
              (favoriteRepository) => favoriteRepository.id === repository.id
            ) ? (
              <FavoriteIconFilled />
            ) : (
              <FavoriteIconOutline />
            )}{" "}
          </FavoriteButton>
          <StyledLink
            to={`/github-search-smartway/repository/${repository.id}`}
          >
            {BUTTONS_TEXT.more}
          </StyledLink>
        </RepositoryButtonsWrapper>
      </RepositoryCardWrapper>
    );
  }
);
