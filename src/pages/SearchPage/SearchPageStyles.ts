import styled from "styled-components";
import { Colors } from "../../shared/constants/color-constants";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const RepositoriesListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 480px;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const ListTitle = styled.p`
  max-width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: left;
  word-break: break-all;
  color: ${Colors.black};
`;
