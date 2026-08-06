import React, { useState } from "react";
import Profile from "./Profile-display";
import AccountSettings from "./Account-settings";

export function Settings() {
  const [edit, setEdit] = useState(false);
  const [userName, setUserName] = useState("User");
  const [userEmail, setUserEmail] = useState("youremail@gmail.com");
  const [userPassword, setUserPassword] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("08*****2790");

  const onEditClick = () => {
    setEdit(true);
  };

  return (
    <>
      <div className="bg-[#fff8e7] min-h-screen w-full p-4">
        <Profile
          userName={userName}
          userEmail={userEmail}
          userPhoneNumber={userPhoneNumber}
          edit={edit}
          setEdit={setEdit}
          onEditClick={onEditClick}
        />
        <AccountSettings
          userName={userName}
          setUserName={setUserName}
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          userPassword={userPassword}
          setUserPassword={setUserPassword}
          userPhoneNumber={userPhoneNumber}
          setUserPhoneNumber={setUserPhoneNumber}
          edit={edit}
          setEdit={setEdit}
          onEditClick={onEditClick}
        />
      </div>
    </>
  );
}
