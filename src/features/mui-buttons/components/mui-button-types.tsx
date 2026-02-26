import { Button, Stack, Typography } from "@mui/material";

export const MuiButtonTypes = () => {
  return (
    <Stack
      component={"article"}
      spacing={2}
      direction="row"
      alignItems="center"
    >
      <Typography variant="h5" component={"h3"} gutterBottom>
        Button Types
      </Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};
