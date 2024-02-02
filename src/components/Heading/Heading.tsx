import { observer } from "mobx-react-lite";
import styled from "styled-components";

const STitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 25px;
  line-height: 30px;
  color: #3375f6;
  line-height: 1.5;
  font-weight: 400;
`;

type THeading = {
  text: string;
};

export const Heading = observer(({ text }: THeading) => (
  <STitle>{text}</STitle>
));
