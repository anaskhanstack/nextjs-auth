import React, { memo } from "react";
import { FaEnvelope, FaUserAlt, FaKey } from "react-icons/fa";
import { useFormContext } from "react-hook-form";

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
        <div></div>;
    }
  }
  return (
    <div
      className={`bg-gray-100 w-10/12  p-2 mb-2 flex items-center ${
        error ? "border border-red-500" : ""
      }`}
    >
      {getIcon(name)}
      <input
        {...methods?.register(name, { required: true, ...validate })}
        {...props}
        className="bg-gray-100 outline-none w-full"
      />
    </div>
  );
});

export default Input;
