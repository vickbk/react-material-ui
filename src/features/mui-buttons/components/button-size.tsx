import { TypesHolder } from "@/features/common/components/types-holder";
import { Button } from "@mui/material";

export const ButtonSize = () => {
  return (
    <TypesHolder title="Button Sizes">
      <Button variant="contained" color="primary" size="small">
        Small
      </Button>
      <Button variant="outlined" color="primary" size="medium">
        Medium
      </Button>
      <Button variant="text" color="primary" size="large">
        Large
      </Button>
    </TypesHolder>
  );
};
