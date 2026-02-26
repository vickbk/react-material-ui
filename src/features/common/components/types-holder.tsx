import { Stack, Typography } from "@mui/material";
import type { TypesHolderProps } from "../types";

export const TypesHolder = ({ title, children }: TypesHolderProps) => {
  return (
    <Stack
      component={"article"}
      spacing={2}
      direction="row"
      alignItems="center"
    >
      <Typography variant="h5" component={"h3"}>
        {title}
      </Typography>
      {children}
    </Stack>
  );
};
