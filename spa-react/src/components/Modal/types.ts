export interface IStylesProps {
  show: boolean;
  width?: string;
}

export interface IModalProps {
  handleClose: () => void;
  show: boolean;
  children: JSX.Element;
  width?: string;
}
