import React, { useState, useRef, useEffect} from "react";
import { IoIosArrowForward, IoIosEye } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function AccountSettings({
  userName,
  setUserName,
  edit,
  setEdit,
  onEditClick,
  userPassword,
  setUserPassword,
  userEmail,
  setUserEmail,
  userPhoneNumber,
  setUserPhoneNumber,
}) {
  const [userNameActive, setUserNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [userPasswordActive, setUserPasswordActive] = useState(false);
  const [userPhoneNumberActive, setUserPhoneNumberActive] = useState(false);
  const [emailInputValue, setEmailInputValue] = useState("");
  const [phoneInputValue, setPhoneInputValue] = useState(undefined);
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(false);
  const [notificationActive, setNotificationActive] = useState(false);
  const [displayActive, setDisplayActive] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const onUserNameUpdate = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a valid username.");
    }
    alert("Username updated successfully!");
    setUserName(inputValue);
    setInputValue("");
    setUserNameActive(false);
  };
  const onEditPassword = () => {
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])/;
    if (passwordInputValue.trim() === "") {
      alert("Please enter a valid password.");
    } else if (passwordInputValue.length < 6) {
      alert("Password must be at least 6 characters long.");
    } else if (passwordInputValue.length > 16) {
      alert("Password must not exceed 16 characters.");
    } else if (!strongPassword.test(passwordInputValue)) {
      alert("Enter a strong password");
    } else {
      alert("Password updated successfully!");
      setUserPassword(passwordInputValue);
      setPasswordInputValue("");
      setUserPasswordActive(false);
    }
  };
  const onEditEmail = () => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInputValue.trim() === "") {
      alert("Email cannot be empty");
    } else if (!validEmail.test(emailInputValue)) {
      alert("Please enter a valid email address");
    } else {
      alert("Email updated successfully");
      setUserEmail(emailInputValue);
    }
    setEmailInputValue("");
    setEmailActive(false);
  };
  const onEditPhoneNumber = () => {
    if (!phoneInputValue) {
      alert("enter a valid phone number");
      return;
    }
    if (!isValidPhoneNumber(phoneInputValue)) {
      alert("Please enter a valid phone number");
      return;
    }
    setUserPhoneNumber(phoneInputValue);
    setPhoneInputValue("");
    setUserPhoneNumberActive(false);
    alert("Phone Number updated successfully");
  };
  const onEditNotification = () => {
    alert("Notification settings updated successfully");
    setNotificationActive(false);
  };


  return (
    <>
    
      <h3 className="text-xl md:text-start text-center font-bold ml-18 mb-5 lg:ml-40 mx-auto">
        Account Settings
      </h3>

      <div onChange={()=>setActive(false)} className="bg-gray-100  p-3 rounded shadow flex flex-col gap-2 sm:w-4/5 w-full mx-auto relative">
        {/* User name */}
        <div className="border-b border-gray-200 pb-10">
          {edit === false ? (
            <label className="font-medium" htmlFor="user-name">
              User Name:
            </label>
          ) : (
            <button
              className="font-medium  flex justify-between items-center w-full cursor-pointer"
              onClick={() => setUserNameActive(!userNameActive)}
            >
              User Name:
              <span className="hover:bg-gray-100 cursor-pointer p-2 active:bg-gray-50">
                <IoIosArrowForward />
              </span>
            </button>
          )}
          <div
            className={` ${userNameActive ? "flex justify-center" : "hidden"}`}
          >
            <input
              className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-900 w-4/5"
              type="text"
              onChange={(event) => setInputValue(event.target.value)}
              value={inputValue}
            />
            <button
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              onClick={onUserNameUpdate}
            >
              Update
            </button>
          </div>
        </div>

        {/* Change Password */}
        <div className="border-b border-gray-200 pb-10">
          {edit === false ? (
            <label className="font-medium">Change Password:</label>
          ) : (
            <button
              className="font-medium flex justify-between items-center w-full"
              onClick={() => setUserPasswordActive(!userPasswordActive)}
            >
              Change Password:{" "}
              <span className="hover:bg-gray-100 cursor-pointer p-2 active:bg-gray-50">
                <IoIosArrowForward />
              </span>
            </button>
          )}
          <div
            className={` ${userPasswordActive ? "flex justify-center relative" : "hidden"}`}
          >
            <input
              className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-4/5"
              type={active ? "text" : "password"}
              onChange={(event) => setPasswordInputValue(event.target.value)}
              value={passwordInputValue}
            />
            <button
              onClick={() => setActive(!active)}
              className="absolute right-28 bottom-3 lg:right-45"
            >
              {active ? <FaEyeSlash /> : <FaEye />}
            </button>
            <button
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              onClick={onEditPassword}
            >
              Update
            </button>
          </div>
        </div>

        {/* change email */}
        <div className="border-b border-gray-200 pb-10">
          {edit === false ? (
            <label className="font-medium" htmlFor="email">
              Change Email:
            </label>
          ) : (
            <button
              className="font-medium flex justify-between items-center w-full"
              onClick={() => setEmailActive(!emailActive)}
            >
              Change Email:
              <span className="hover:bg-gray-100 cursor-pointer p-2 active:bg-gray-50">
                <IoIosArrowForward />
              </span>
            </button>
          )}
          <div className={` ${emailActive ? "flex justify-center" : "hidden"}`}>
            <input
              className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-4/5"
              type="text"
              onChange={(event) => setEmailInputValue(event.target.value)}
              value={emailInputValue}
            />
            <button
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              onClick={onEditEmail}
            >
              Update
            </button>
          </div>
        </div>

        {/* change phone number */}
        <div className=" pb-10 border-b border-gray-200">
          {edit === false ? (
            <label className="font-medium" htmlFor="phone-number">
              Change Phone Number:
            </label>
          ) : (
            <button
              className="font-medium flex justify-between items-center w-full"
              onClick={() => setUserPhoneNumberActive(!userPhoneNumberActive)}
            >
              Change Phone Number:
              <span className="hover:bg-gray-100 cursor-pointer p-2 active:bg-gray-50">
                <IoIosArrowForward />
              </span>
            </button>
          )}
          <div
            className={` ${userPhoneNumberActive ? "flex justify-center" : "hidden"}`}
          >
            <PhoneInput
              numberInputProps={{
                className:
                  "outline-none focus:outline-none focus:ring-0 border-none",
              }}
              className="border border-gray-300 rounded py-2 px-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-900 w-4/5"
              defaultCountry="NG"
              international
              onChange={(value) => setPhoneInputValue(value)}
              value={phoneInputValue}
            />
            <button
              className="bg-blue hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              onClick={onEditPhoneNumber}
            >
              Update
            </button>
          </div>
        </div>
        {/* notification settings */}
        <div className=" pb-10 border-b border-gray-200">
          {edit === false ? (
            <label className="font-medium" htmlFor="phone-number">
              Notification Settings:
            </label>
          ) : (
            <button
              className="font-medium flex justify-between items-center w-full"
              onClick={() => setNotificationActive(!notificationActive)}
            >
              Notification Settings:
              <span className="hover:bg-gray-100 cursor-pointer p-2 active:bg-gray-50">
                <IoIosArrowForward />
              </span>
            </button>
          )}
          <div
            className={` ${notificationActive ? "flex justify-between" : "hidden"}`}
          >
            <select className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-4/5">
              <option value="sms">Via Sms</option>
              <option value="email">Via Email</option>

              <option value="push">Via Push Notification</option>
            </select>
            <button
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              onClick={onEditNotification}
            >
              Save
            </button>
          </div>
        </div>
        {/* Display Settings */}
        <div className=" pb-10 border-b border-gray-200">
          {edit === false ? (
            <label className="font-medium" htmlFor="phone-number">
              Display Settings:
            </label>
          ) : (
            <div className="flex justify-between items-center w-full">
              <label
                className="font-medium flex justify-between items-center w-full"
                onClick={() => setDisplayActive(!displayActive)}
              >
                Display Settings:
              </label>
              <button
                className={`w-14 h-7 rounded-full p-0.5 transition-colors duration-300 bg-gray-300`}
                onClick={() => setEnabled(!enabled)}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white transition-transform duration-300 ${enabled ? "translate-x-7" : "translate-x-0"}`}
                ></div>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}