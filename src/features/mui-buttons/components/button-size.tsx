import { MuiComponentsHolder } from "@/features/common/components/mui-components-holder";
import { Button } from "@mui/material";

export const ButtonSize = () => {
  return (
    <MuiComponentsHolder title="Button Sizes">
      <Button variant="contained" color="primary" size="small">
        Small
      </Button>
      <Button variant="outlined" color="primary" size="medium">
        Medium
      </Button>
      <Button variant="text" color="primary" size="large">
        Large
      </Button>
    </MuiComponentsHolder>
  );
};
