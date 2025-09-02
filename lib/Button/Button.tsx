import type { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children?: ReactNode;
}
 
export const Button: React.FC<ButtonProps> = ({ children, variant, ...props } ) => {

  return (
    <button className={`${styles.button} ${styles[`button--${variant}`]}`} {...props}>{children}</button>
  )
};
