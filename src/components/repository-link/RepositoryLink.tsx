import styled from "styled-components";

type TLink = {
  link: string;
  children: React.ReactNode;
};

export const StyledRepositoryLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  text-decoration: inherit;

  :active {
    text-decoration: none;
  }
`;

export const RepositoryLink: React.FC<TLink> = ({ link, children }) => {
  return <StyledRepositoryLink href={link}>{children}</StyledRepositoryLink>;
};
