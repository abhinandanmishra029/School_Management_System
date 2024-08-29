import React from "react";
import "./admission.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Actions/User";

const Admission = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    alert("Logged out successfully");
  };
  return (
    <div className="admission">
      Hello User This is page is currently not working
      <div className="button" variant="contained" onClick={logoutHandler}>
        Log Out
      </div>
    </div>
  );
};
export default Admission;
