import { observer } from "mobx-react-lite";
import { StyledInput } from "./InputStyles";

type TInput = {
  value: string;
  name: string;
  placeholder: string;
  onInput: (event: React.FormEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<TInput> = observer(
  ({ value, name, placeholder, onInput }) => {
    return (
      <StyledInput
        value={value}
        name={name}
        placeholder={placeholder}
        onInput={onInput}
      />
    );
  }
);
