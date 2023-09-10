import React from "react";

interface FormElementProps {
  label: string;
  children: React.ReactNode;
  error?: string | null;
}

export function FormElement({ label, error, children }: FormElementProps) {
  return (
    <p>
      <label>
        {label}: {" "}
        {
          error &&
          <em className="text-red-600">{error}</em>
        }
        {children}
      </label>
    </p>
  );
}