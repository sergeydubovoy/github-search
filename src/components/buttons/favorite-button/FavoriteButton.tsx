import { PropsWithChildren } from "react";
import styled from "styled-components";

type TFavoriteButton = {
  onClick: () => void;
};

export const StyledFavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  max-width: 150px;
  height: 34px;
  cursor: pointer;
`;

export const FavoriteButton: React.FC<PropsWithChildren<TFavoriteButton>> = ({
  onClick,
  children,
}) => {
  return (
    <StyledFavoriteButton onClick={onClick}>{children}</StyledFavoriteButton>
  );
};
