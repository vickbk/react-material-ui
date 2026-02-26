import { TextFieldsCategories } from "@/features/mui-textfields/components/text-fields-categories";
import { MuiButton } from "./mui-button";
import { MuiTypoGraphy } from "./mui-typography";

export const AppContent = () => {
  return (
    <main className="p-4">
      <MuiTypoGraphy />
      <MuiButton />
      <TextFieldsCategories />
    </main>
  );
};
