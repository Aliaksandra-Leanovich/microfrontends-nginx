import React from "react";
import {
  ContainerSC,
  ErrorMessageSC,
  StyledInputSC,
  WarningTextSC,
} from "./style";
import { IInputProps } from "./types";
import { ReactComponent as WarningImg } from "../../assets/warningImage.svg";

export const Input = ({
  type,
  placeholder,
  errors,
  label,
  register,
}: IInputProps) => {
  return (
    <ContainerSC>
      <StyledInputSC
        type={type}
        placeholder={placeholder}
        {...register(label)}
      />
      {errors && (
        <ErrorMessageSC>
          <WarningImg />
          <WarningTextSC />
          {errors}
        </ErrorMessageSC>
      )}
    </ContainerSC>
  );
};
