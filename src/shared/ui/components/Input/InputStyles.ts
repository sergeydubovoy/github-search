import styled from "styled-components";
import { Colors } from "../../../constants/color-constants";

export const StyledInput = styled.input`
  padding: 5px 10px;
  width: 100%;
  height: 50px;
  border: 1px solid #dfe3e6;
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
  box-sizing: border-box;
  transition: border 0.3s ease;
  color: ${Colors.black};
  background: ${Colors.white};

  &:hover {
    border: 1px solid ${Colors.darkGrey};
  }

  &:focus {
    outline: none;
    border: 1px solid ${Colors.brightBlue};
  }

  &::placeholder {
    color: ${Colors.lightGrey};
  }
`;
