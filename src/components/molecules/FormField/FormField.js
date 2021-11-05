import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const FormField = ({ label, name, id, type = 'text', ...props }) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} />
    </>
  );
};

export default FormField;
