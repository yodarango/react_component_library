import { MenuItem as MMenuItem, MenuItemProps } from "@mui/base/MenuItem";
import {
  MenuButton as MMenuButton,
  MenuButtonProps,
} from "@mui/base/MenuButton";
import { Menu as MMenu, MenuProps } from "@mui/base/Menu";

import "./Menu.scss";

export const Menu = (props: MenuProps) => {
  return <MMenu {...props} />;
};

interface IMenuItem {
  icon?: string;
  iconClass?: string;
}
export const MenuItem = (props: MenuItemProps & IMenuItem) => {
  const { icon, iconClass, children, className } = props;
  return (
    <MMenuItem
      {...props}
      className={`${className} d-flex align-items-center justify-content-start w-100 mb-2`}
    >
      {icon && (
        <span className={`icon icon-${icon} ${iconClass} color-alpha`} />
      )}
      <div>{children}</div>
    </MMenuItem>
  );
};

interface IMenuButton {
  secondary?: boolean;
  loading?: boolean;
  primary?: boolean;
}
export const MenuButton = (props: MenuButtonProps & IMenuButton) => {
  const {
    className = "",
    secondary,
    children,
    disabled,
    primary,
    loading,
    ...rest
  } = props;

  const color = secondary ? "secondary" : primary ? "primary" : "default";
  return (
    <MMenuButton {...rest} className={`${color} ${className}`}>
      {children}
    </MMenuButton>
  );
};
