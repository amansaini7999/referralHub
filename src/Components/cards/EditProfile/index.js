import React from "react";
import EditReferee from "./EditReferee";
import EditReferrer from "./EditReferrer";

const EditProfile = ({ type }) => {
  let profile = null;

  if (type.toLowerCase() === "referee") {
    profile = <EditReferee heading="Edit Profile" buttonLabel="Send" />;
  } else if (type.toLowerCase() === "referrer") {
    profile = <EditReferrer heading="Edit Profile" buttonLabel="Send" />;
  }

  return <>{profile}</>;
};

export default EditProfile;
