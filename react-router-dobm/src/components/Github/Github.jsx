import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData() || {};

  return (
    <div>
      <h1 className="text-center my-3 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-orange-700">
        Github
      </h1>

      <div className="flex items-center my-2 max-w-2xl flex-col sm:flex-row mx-auto bg-gradient-to-r from-white/70 to-gray-300 rounded-3xl overflow-hidden">
        <div className="w-1/2 sm:w-full">
          <img src={data.avatar_url} className="w-full" alt={data.login} />
        </div>
        <div className="w-1/2 sm:w-full flex flex-col gap-10 px-3 py-5">
          <div className="mx-3">
            <p>
              <span className="font-bold">Username :: </span>
              {data.login}
            </p>
            <p className="my-2">
              <span className="font-bold">Name :: </span>
              {data.name}
            </p>
            <p>
              <span className="font-bold">Bio :: </span>
              {data.bio}
            </p>
          </div>
          <div>
            <button className="bg-orange-700 text-white rounded-full px-6 py-3">
              followers {data.followers}
            </button>
            <button className="bg-orange-700 text-white rounded-full px-6 py-3 mx-1">
              publics repo {data.public_repos}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async function () {
  const response = await fetch("https://api.github.com/users/ifastkrishna");
  const data = await response.json();
  return data;
};
