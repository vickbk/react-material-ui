import { MuiCategoryHolder } from "@/features/common/components/mui-category-holder";
import { TextfieldAddOns } from "./textfields-adds-on";
import { TextFieldVariants } from "./textfields-variants";

export const TextFieldsCategories = () => {
  return (
    <MuiCategoryHolder title="Text Fields">
      <TextFieldVariants />
      <TextfieldAddOns />
    </MuiCategoryHolder>
  );
};
