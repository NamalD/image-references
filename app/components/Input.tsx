import { InputHTMLAttributes } from "react";

interface InputProps {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  accept?: string;
}

export const Input = ({ name, type = 'text', accept }: InputProps) =>
  <input
    type={type}
    name={name}
    accept={accept}
    className="border border-gray-300 w-full px-2 py-1"
  />;