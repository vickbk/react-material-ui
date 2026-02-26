import { TypesHolder } from "@/features/common/components/types-holder";
import { Button } from "@mui/material";

export const ButtonColors = () => {
  return (
    <TypesHolder title="Button Colors">
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
    </TypesHolder>
  );
};
