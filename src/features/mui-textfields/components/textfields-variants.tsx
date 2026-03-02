import { MuiComponentsHolder } from "@/features/common/components/mui-components-holder";
import { TextField } from "@mui/material";

export const TextFieldVariants = () => {
  return (
    <MuiComponentsHolder title="text fields variants">
      <TextField label="Standard" variant="standard" />
      <TextField label="Filled" variant="filled" />
      <TextField label="Outlined" variant="outlined" />
    </MuiComponentsHolder>
  );
};
