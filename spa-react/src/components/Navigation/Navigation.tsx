import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "src/hooks/use-changeLanguage.hook";
import { useLogout } from "src/hooks/use-logout.hook";
import { LinkVariants } from "../../enums";
import { routes } from "../../routes";
import { useAppSelector } from "../../store/hooks";
import { getUserInfo } from "../../store/selectors";
import { Link } from "../Link";
import { LoginForm } from "../LoginForm";
import { Modal } from "../Modal/Modal";
import { ButtonSC, ContainerSC, LinkCustomSC, LinkSC } from "./style";

export const Navigation = () => {
  const { t } = useTranslation();

  const { handleLogout } = useLogout();
  const { changeLanguage, language } = useChangeLanguage();

  const { isAuthorized } = useAppSelector(getUserInfo);

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <ContainerSC>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {t("language")}
        </InputLabel>
        <NativeSelect
          defaultValue={language}
          inputProps={{
            name: "language",
            id: "uncontrolled-native",
          }}
          sx={{
            color: "white",
          }}
          onChange={changeLanguage}
        >
          <option value="ru"> {t("language.russian")}</option>
          <option value="en"> {t("language.english")}</option>
        </NativeSelect>
      </FormControl>
      <LinkSC href={routes.PRODUCT}>{t("nav.product")}</LinkSC>
      <LinkSC href={routes.SERVICES}>{t("nav.service")}</LinkSC>
      <LinkCustomSC to={routes.ABOUT}>{t("nav.about")}</LinkCustomSC>
      <Modal show={show} handleClose={showModal}>
        <LoginForm setShow={setShow} />
      </Modal>
      <>
        {isAuthorized ? (
          <>
            <Link to={routes.USERS} variant={LinkVariants.primaryWhiteSmall}>
              {t("button.users")}
            </Link>
            <ButtonSC type="button" onClick={handleLogout}>
              {t("button.logout")}
            </ButtonSC>
          </>
        ) : (
          <ButtonSC onClick={showModal}> {t("button.login")}</ButtonSC>
        )}
      </>
    </ContainerSC>
  );
};
