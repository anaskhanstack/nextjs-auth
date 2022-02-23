import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";

import { Date, Input } from "./datepicker.style.tw";

import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerUI(props: any) {
  const methods = useFormContext();

  return (
    <Date error={props.error}>
      <FaRegCalendarAlt className="mr-2" color="gray" />
      <Controller
        name="dob"
        control={methods?.control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }): any => (
          <DatePicker
            selected={value}
            onChange={(date: any) => onChange(date)}
            placeholderText="Date of Birth"
            customInput={<Input />}
          />
        )}
      />
    </Date>
  );
}
