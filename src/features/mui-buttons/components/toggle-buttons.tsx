import { MuiComponentsHolder } from "@/features/common/components/mui-components-holder";
import { FormatItalic, FormatUnderlined } from "@mui/icons-material";
import FormatBold from "@mui/icons-material/FormatBold";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useExclusiveToggleButtons, useToggleButtons } from "../hooks";

export const ToggleButtons = () => {
  const { formats, handleFormatChange } = useToggleButtons();
  const { format, handleFormatChange: handleExclusiveFormatChange } =
    useExclusiveToggleButtons();
  return (
    <MuiComponentsHolder title="Toggle Buttons">
      <ToggleButtonGroup
        aria-label="text formatting"
        value={formats}
        onChange={handleFormatChange}
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBold />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalic />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlined />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        aria-label="text formatting"
        value={format}
        onChange={handleExclusiveFormatChange}
        exclusive
        orientation="vertical"
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBold />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalic />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlined />
        </ToggleButton>
      </ToggleButtonGroup>
    </MuiComponentsHolder>
  );
};
