import { ReactNode } from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    children?: ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
export {};
