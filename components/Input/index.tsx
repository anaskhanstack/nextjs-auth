import React, { memo } from "react";
import { FaEnvelope, FaUserAlt, FaKey } from "react-icons/fa";
import { useFormContext } from "react-hook-form";
import { InputField, InputUI } from "./input.style.tw";

const Input = memo((props: any) => {
  const { name, validate, error } = props;
  const methods = useFormContext();

  function getIcon(name: string) {
    switch (name) {
      case "username":
        return <FaUserAlt className="mr-2" color="gray" />;

      case "email":
        return <FaEnvelope className="mr-2" color="gray" />;

      case "password":
        return <FaKey className="mr-2" color="gray" />;

      default:
        return <div></div>;
    }
  }
  return (
    <InputField error={error}>
      {getIcon(name)}
      <InputUI
        {...methods?.register(name, { required: true, ...validate })}
        {...props}
      />
    </InputField>
  );
});

Input.displayName = "Input";

export default Input;
