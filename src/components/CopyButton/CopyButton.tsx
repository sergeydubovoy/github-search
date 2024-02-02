import styled from "styled-components";
import { Colors } from "../../style/styles";

type TCopyButton = {
  title: string;
  onClick: () => void;
};

export const StyledCopyButton = styled.button`
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 9px;
  background-color: ${Colors.blue};
  color: ${Colors.white};
  font-size: 16px;
  line-height: 20px;
  font-weight: 800;
  text-transform: uppercase;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.brightBlue};
  }
`;

export const CopyButton: React.FC<TCopyButton> = ({ title, onClick }) => {
  return <StyledCopyButton onClick={onClick}>{title}</StyledCopyButton>;
};
