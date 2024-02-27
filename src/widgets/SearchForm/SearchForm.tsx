import { observer } from "mobx-react-lite";
import styled from "styled-components";

type TSearchForm = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};

const StyledSearchForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  min-width: 500px;
  width: 500px;
  height: auto;
  gap: 10px;
  padding: 10px;
  border: 1px solid #dfe3e6;
  border-radius: 10px;
  background: #ffffff;
`;

export const SearchForm: React.FC<TSearchForm> = observer(
  ({ onSubmit, children }) => {
    return <StyledSearchForm onSubmit={onSubmit}>{children}</StyledSearchForm>;
  }
);
