import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ButtonSC, ContainerInputSC, FormSC, Input } from "./style";
import { useAddUser } from "../../hooks/use-addUser.hook";

export const FormWithEmail = () => {
  const { register, handleSubmit, reset, getValues, control } = useForm();

  const { t } = useTranslation();

  const buttonText = t("form.button");
  const valueEmail = t("input.value.email");

  const [button, setButton] = useState<string>(buttonText);
  const { onSubmit } = useAddUser(reset, getValues);

  return (
    <FormSC onSubmit={handleSubmit(onSubmit)}>
      <ContainerInputSC>
        <Controller
          name="email"
          control={control}
          render={() => (
            <Input
              type="email"
              {...register("email")}
              placeholder={valueEmail}
            />
          )}
        />
      </ContainerInputSC>

      <ButtonSC>{button}</ButtonSC>
    </FormSC>
  );
};
