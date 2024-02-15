import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div>
      <h1 className=" bg-orange-700 my-5 py-9 mx-10 text-3xl text-white font-extrabold text-center rounded-full">
        User :: {userid}
      </h1>
    </div>
  );
}

export default User;
