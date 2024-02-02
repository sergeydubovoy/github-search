import styled from "styled-components";
import { Colors } from "../../style/styles";

type TMoreButton = {
  title: string;
  onClick: () => void;
};

const StyledMoreButton = styled.button`
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${Colors.grey};
  border: none;
  outline: none;
  transition: background-color 0.2s;
  color: ${Colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${Colors.brightBlue};
  }
`;

export const MoreButton: React.FC<TMoreButton> = ({ title, onClick }) => {
  return <StyledMoreButton onClick={onClick}>{title}</StyledMoreButton>;
};
