import { Group, Input, FormInputLabel } from './form-input.styles';

interface Props {
  label: string;
}

const FormInput = ({ label, ...otherProps }: Props) => (
  <Group>
    <Input {...otherProps} />
    {label && (
      <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
    )}
  </Group>
);

export default FormInput;
