import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { Date } from "./datepicker.style.tw";

import "react-datepicker/dist/react-datepicker.css";

export default function SocialLogin() {
  const [startDate, setStartDate] = React.useState();

  return (
    <Date>
      <FaRegCalendarAlt className="mr-2" color="gray" />
      <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        placeholderText="Date of Birth"
        customInput={<input className="bg-gray-100 outline-none w-full" />}
      />
    </Date>
  );
}
