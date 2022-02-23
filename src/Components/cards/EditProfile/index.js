import React from "react";
import EditReferee from "./EditReferee";
import EditReferrer from "./EditReferrer";

const EditProfile = ({token, data,setData, type }) => {
  let profile = null;


  // console.log("editProfile");

  if (type.toLowerCase() === "referee") {
    profile = <EditReferee token={token} data={data} setData={setData} heading="Edit Profile" buttonLabel="Send" />;
  } else if (type.toLowerCase() === "referrer") {
    profile = <EditReferrer token={token} data={data} setData={setData} heading="Edit Profile" buttonLabel="Send" />;
  }

  return <>{profile}</>;
};

export default EditProfile;
