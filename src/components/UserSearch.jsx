import React, { useState, useContext } from "react";
import AlertContext from "../context/alert/AlertContext";
import GithubContext from "../context/github/GithubContext";
import {FaSatelliteDish} from 'react-icons/fa'
import Loader from "./Loader";

function UserSearch() {
  const { users, searchusers, clearUsers } = useContext(GithubContext);
  const { isError, emptyError, removeError} = useContext(AlertContext)
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      emptyError();

      setTimeout(() => {
        removeError()
      }, 2000)

    } else {
      searchusers(text)
      setText('')
    }
  };

  return (
    <>
    {
      isError && <div className="flex gap-2 items-center justify-start mb-4 bg-gray-800 rounded-full p-2 w-2/5">
        <FaSatelliteDish className="inline pr-2 text-3xl text-red-500"/>
        <p className="text-red-400 uppercase font-bold text-sm">Please write Something</p>
      </div>
    }
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 ">
  
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                className="w-full bg-gray-200 pr-40 text-black input input-lg"
                placeholder="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>Clear</button>
        </div>
      )}
    </div>
    
    {/* <Loader/> */}
    </>
  );
}

export default UserSearch;
