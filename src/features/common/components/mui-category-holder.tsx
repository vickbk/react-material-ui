import { Stack, Typography } from "@mui/material";
import React from "react";

export const MuiCategoryHolder = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <Stack component={"section"} spacing={4} mb={4}>
      <Typography variant="h4" component={"h2"} gutterBottom>
        {title}
      </Typography>
      {children}
    </Stack>
  );
};
