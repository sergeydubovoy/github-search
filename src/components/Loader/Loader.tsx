import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { Colors } from "../../style/styles";

const StyledLoader = styled(ThreeDots)`
  margin: 0 auto;
`;

export const Loader = () => {
  return <StyledLoader color={Colors.brightBlue} />;
};
