import { TypesHolder } from "@/features/common/components/types-holder";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Button, IconButton } from "@mui/material";

export const IconButtons = () => {
  return (
    <TypesHolder title="Icon Buttons">
      <Button variant="contained" color="primary" startIcon={<SendIcon />}>
        Send
      </Button>
      <Button variant="outlined" color="primary" endIcon={<SendIcon />}>
        Send
      </Button>
      <Button
        variant="text"
        color="primary"
        startIcon={<DeleteIcon />}
        endIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <IconButton aria-label="Delete" color="success">
        <DeleteIcon />
      </IconButton>
    </TypesHolder>
  );
};
