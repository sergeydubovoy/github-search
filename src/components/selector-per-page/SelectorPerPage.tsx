import { observer } from "mobx-react-lite";
import { SELECT_VALUES, SHOW_PER_PAGE_CONST } from "../../utils/constants";
import styled from "styled-components";
import { Colors } from "../../style/styles";

type TSelectorPerPage = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectorWrapper = styled.div`
  margin: 0 auto;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid ${Colors.softGrey};
`;

const StyledSelect = styled.select`
  padding: 2px 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  border-radius: 4px;
  background-color: ${Colors.lightBlue};
  color: ${Colors.black};
`;

export const SelectorPerPage: React.FC<TSelectorPerPage> = observer(
  ({ onChange }) => {
    return (
      <SelectorWrapper>
        {SHOW_PER_PAGE_CONST}
        <StyledSelect
          onChange={onChange}
          defaultValue={SELECT_VALUES.defaultValue}
        >
          <option value={SELECT_VALUES.firstValue}>
            {SELECT_VALUES.firstValue}
          </option>
          <option value={SELECT_VALUES.secondValue}>
            {SELECT_VALUES.secondValue}
          </option>
          <option value={SELECT_VALUES.thirdValue}>
            {SELECT_VALUES.thirdValue}
          </option>
          <option value={SELECT_VALUES.fourthValue}>
            {SELECT_VALUES.fourthValue}
          </option>
        </StyledSelect>
      </SelectorWrapper>
    );
  }
);
