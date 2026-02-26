import { TypesHolder } from "@/features/common/components/types-holder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, ButtonGroup } from "@mui/material";

export const ButtonGroups = () => {
  return (
    <TypesHolder title="Button Group">
      <ButtonGroup variant="outlined">
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained" orientation="vertical">
        <Button>Top</Button>
        <Button>Middle</Button>
        <Button>Bottom</Button>
      </ButtonGroup>

      <ButtonGroup variant="text" color="secondary">
        <Button startIcon={<ArrowBackIcon />}>Left</Button>
        <Button>Center</Button>
        <Button endIcon={<ArrowForwardIcon />}>Right</Button>
      </ButtonGroup>
    </TypesHolder>
  );
};
