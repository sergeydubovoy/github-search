import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../shared/constants/color-constants";

export const RepositoryCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  max-width: 470px;
  height: 100px;
  border: 1px solid ${Colors.softGrey};
  border-radius: 10px;
  background: white;

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const RepositoryInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 10px;
`;

export const RepositoryStatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 10px;
`;

export const RepositoryButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;

export const RepositoryImage = styled.img`
  border-radius: 50%;
  max-width: 40px;
  max-height: 40px;
`;

export const RepositoryTitle = styled.p`
  max-width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
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

export const StyledLink = styled(Link)`
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${Colors.grey};
  transition: background-color 0.2s;
  color: ${Colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 60px;
  text-decoration: inherit;
  cursor: pointer;

  :active {
    text-decoration: none;
  }

  &:hover {
    background-color: ${Colors.brightBlue};
  }
`;
