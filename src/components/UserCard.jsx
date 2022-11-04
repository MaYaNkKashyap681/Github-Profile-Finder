import React from "react";
import { Link } from "react-router-dom";

function UserCard({ avatar, login }) {
  return (
    <div className="flex file:justify-start gap-4 items-center bg-gray-600 p-2 rounded-2xl border-b-2 border-transparent hover:border-b-2 hover:border-purple-400 cursor-pointer relative">
      <img src={avatar} className="h-12 w-12 rounded-full" />
      <div>
        <h1 className="text-lg uppercase font-bold">{login}</h1>
        <Link
          to={`/userprofile/${login}`}
          className="text-gray-800 font-bold text-sm hover:text-purple-200"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
