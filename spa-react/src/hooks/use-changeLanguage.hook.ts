import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

export const useChangeLanguage = () => {
  const [language, setLanguage] = useState<string>();

  const { i18n } = useTranslation();
  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return { changeLanguage, language };
};
