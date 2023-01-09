import { Colors } from "../../ui";

export interface IPropsStyle {
  height: string;
  background: string;
}

export interface IProps {
  background: Colors;
  height?: string;
  radius?: string;
}
