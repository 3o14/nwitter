import React from "react";
import { authService } from "fbase";
import { useNavigate } from "react-router";

const Profile = () => {
    const navigate = useNavigate();
    const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;