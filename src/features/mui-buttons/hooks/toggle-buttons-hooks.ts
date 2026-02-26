import React from "react";
import type { ToggleButtonValue } from "../types";

export function useToggleButtons() {
  const [formats, setFormats] = React.useState<ToggleButtonValue[]>(() => []);

  const handleFormatChange = (_: unknown, newFormats: ToggleButtonValue[]) => {
    setFormats(newFormats);
  };

  return { formats, handleFormatChange };
}

export function useExclusiveToggleButtons() {
  const [format, setFormat] = React.useState<ToggleButtonValue | null>(null);

  const handleFormatChange = (_: unknown, newFormat: ToggleButtonValue) => {
    setFormat(newFormat);
  };

  return { format, handleFormatChange };
}
