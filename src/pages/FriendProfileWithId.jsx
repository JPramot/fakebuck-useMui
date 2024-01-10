import React from "react";
import { useParams } from "react-router-dom";

function FriendProfileWithId() {
  const pathParamObj = useParams();
  console.log("path", pathParamObj);
  return <div>FriendProfileWithId</div>;
}

export default FriendProfileWithId;
