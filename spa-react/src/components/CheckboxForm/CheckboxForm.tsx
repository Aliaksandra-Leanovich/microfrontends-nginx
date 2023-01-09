import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useUpdateDoc } from "../../hooks/use-updateDoc.hook";

export const CheckboxForm = () => {
  const { toggleCheck } = useUpdateDoc();

  return (
    <FormControlLabel
      control={<Checkbox onChange={toggleCheck} />}
      label="Check me"
    />
  );
};
