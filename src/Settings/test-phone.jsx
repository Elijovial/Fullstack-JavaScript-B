import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function TestPhone() {
  const [value, setValue] = useState();

  return (
    <div style={{ padding: "20px" }}>
      <PhoneInput
        defaultCountry="NG"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}