import { ButtonColors } from "@/features/mui-buttons/components/button-colors";
import { ButtonSize } from "@/features/mui-buttons/components/button-size";
import { IconButtons } from "@/features/mui-buttons/components/icon-buttons";
import { MuiButtonTypes } from "@/features/mui-buttons/components/mui-button-types";
import { Stack, Typography } from "@mui/material";

export const MuiButton = () => {
  return (
    <Stack component={"section"} spacing={4} mb={4}>
      <Typography variant="h4" component={"h2"} gutterBottom>
        Mui Buttons by category
      </Typography>
      <MuiButtonTypes />
      <ButtonColors />
      <ButtonSize />
      <IconButtons />
    </Stack>
  );
};
