import React from "react";

interface FormElementProps {
  label: string;
  children: React.ReactNode;
}

export function FormElement({ label, children }: FormElementProps) {
  return (
    <p>
      <label>
        {label}
        {children}
      </label>
    </p>
  );
}