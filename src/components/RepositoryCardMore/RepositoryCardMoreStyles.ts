import styled from "styled-components";
import { Colors } from "../../style/styles";

export const RepositoryCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  min-width: 600px;
  max-width: 1000px;
  height: auto;
  gap: 10px;
  border: 1px solid #dfe3e6;
  border-radius: 10px;
  background: white;

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const DescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  width: 100%;
  min-width: 600px;
  max-width: 1000px;
  height: auto;
  gap: 10px;
  border: 1px solid #dfe3e6;
  border-radius: 10px;
  background: white;

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const RepositoryInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const RepositoryStatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 10px;
`;

export const FavoriteButtonInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding: 4px 8px;
  min-width: 150px;
  width: 150px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #3949ab;
  gap: 4px;
  color: ${Colors.black};
`;

export const RepositoryImage = styled.img`
  border-radius: 50%;
  max-width: 100px;
  max-height: 100px;
`;

export const RepositoryTitle = styled.p`
  max-width: 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  text-align: left;
  word-break: break-all;
  color: ${Colors.black};
`;

export const StatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const StatIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const DescriptionText = styled.p`
  text-align: left;
`;
