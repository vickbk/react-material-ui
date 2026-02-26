import { MuiComponentsHolder } from "@/features/common/components/mui-components-holder";
import { Button } from "@mui/material";

export const ButtonColors = () => {
  return (
    <MuiComponentsHolder title="Button Colors">
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" color="warning">
        Warning
      </Button>
      <Button variant="contained" color="info">
        Info
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
    </MuiComponentsHolder>
  );
};
