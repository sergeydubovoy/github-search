import { observer } from "mobx-react-lite";
import MainStore from "../../store/MainStore";
import { INFO_TEXT, BUTTONS_TEXT } from "../../shared/constants/text-constants";
import { RepositoryLink } from "../../shared/ui/components/RepositoryLink/RepositoryLink";
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
import { FavoriteIcon } from "../../assets/FavoriteIcon";
import { ForkIcon } from "../../assets/ForkIcon";
import { StarIcon } from "../../assets/StarIcon";
import { FavoriteButton } from "../../shared/ui/buttons/FavoriteButton/FavoriteButton";
import { Colors } from "../../shared/constants/color-constants";

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
                : INFO_TEXT.noRepositoryTitle}
            </RepositoryTitle>
          </RepositoryLink>
          <RepositoryStatsWrapper>
            <StatWrapper>
              <StarIcon width={"16px"} height={"16px"} />
              {repository.stargazers_count
                ? repository.stargazers_count
                : INFO_TEXT.noStars}
            </StatWrapper>
            <StatWrapper>
              <ForkIcon width={"16px"} height={"16px"} />
              {repository.forks_count
                ? repository.forks_count
                : INFO_TEXT.noForks}
            </StatWrapper>
          </RepositoryStatsWrapper>
        </RepositoryInfoWrapper>
        <RepositoryButtonsWrapper>
          <FavoriteButton onClick={() => MainStore.toggleFavorite(repository)}>
            <FavoriteIcon
              fill={"none"}
              stroke={
                MainStore.favoriteRepositories.some(
                  (favoriteRepository) =>
                    favoriteRepository.id === repository.id
                )
                  ? Colors.brightBlue
                  : Colors.grey
              }
              width={"24px"}
              height={"24px"}
            />
          </FavoriteButton>
          <StyledLink to={`/github-search/repository/${repository.id}`}>
            {BUTTONS_TEXT.more}
          </StyledLink>
        </RepositoryButtonsWrapper>
      </RepositoryCardWrapper>
    );
  }
);
