interface FormInputProps {
  label: string;
  field: string;
}

export function FormInput(props: FormInputProps) {
  return (
    <p>
      <label>
        {props.label}
        <input
          type="text"
          name={props.field}
          className="border border-gray-300 w-full px-2 py-1"
        />
      </label>
    </p>
  );
}