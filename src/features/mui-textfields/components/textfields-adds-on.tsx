import { MuiComponentsHolder } from "@/features/common/components/mui-components-holder";
import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";

export const TextfieldAddOns = () => {
  return (
    <MuiComponentsHolder title="Text Fields Add-Ons">
      <TextField label="Disabled" disabled />
      <TextField label="Error" error helperText="Incorrect entry." />
      <TextField label="Required" required />

      <TextField label="With helper text" helperText="Some important text" />
      <TextField
        label="With some prefix"
        slotProps={{ input: { startAdornment: "@" } }}
      />
      <TextField
        label="With icon"
        variant={"standard"}
        slotProps={{ input: { startAdornment: <Search /> } }}
      />
    </MuiComponentsHolder>
  );
};
