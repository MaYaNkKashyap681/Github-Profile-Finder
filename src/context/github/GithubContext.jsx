import { createContext, useState, useReducer } from "react";
import axios from "axios";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: []
  };
  /* You could either use state as well as you can use reducers in the Provider */
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // const fetchusers = async () => {
  //   const res = await axios.get("https://api.github.com/users");
  //   if (res) {
  //     dispatch({
  //       type: "GET_USERS",
  //       payload: res.data
  //     })
  //   }
  // };

  const searchusers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });

    const res = await axios.get(
      `https://api.github.com/search/users?${params}`
    );
    if (res) {
      dispatch({
        type: "GET_USERS",
        payload: res.data.items,
      });
    }
  };

  const getuser = async (login) => {
    // const params = new URLSearchParams({
    //   q: text,
    // });

    const res = await axios.get(
      `https://api.github.com/users/${login}`
    );

    if(res.status === 404) {
      window.location = '/notfound'
    }

    if (res) {
      dispatch({
        type: "GET_USER",
        payload: res.data,
      });
    }
  };

  const getuserrepos = async (login) => {

    const res = await axios.get(
      `https://api.github.com/users/${login}/repos`
    );

    if(res.status === 404) {
      window.location = '/notfound'
    }
    
    if (res) {
      // console.log(res.data)
      dispatch({
        type: "GET_REPOS",
        payload: res.data,
      });
    }
  };


  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, user: state.user, repos: state.repos, searchusers, clearUsers, getuser, getuserrepos }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
