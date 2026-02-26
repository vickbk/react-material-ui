import { Stack, Typography } from "@mui/material";
import type { TypesHolderProps } from "../types";

export const MuiComponentsHolder = ({ title, children }: TypesHolderProps) => {
  return (
    <Stack
      component={"article"}
      spacing={2}
      direction="row"
      alignItems="center"
      flexWrap={"wrap"}
    >
      <Typography variant="h5" component={"h3"}>
        {title}
      </Typography>
      {children}
    </Stack>
  );
};
