import { InputHTMLAttributes } from "react";

interface InputProps {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  accept?: string;
  className?: string;
}

export const Input = ({ name, type = 'text', accept, className }: InputProps) =>
  <input
    type={type}
    name={name}
    accept={accept}
    className={`border border-gray-300 w-full px-2 py-1 ${className}`}
  />;