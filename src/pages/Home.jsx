import React from "react";
import UserResults from "../components/UserResults";
import UserSearch from "../components/UserSearch";
import { AlertProvider } from "../context/alert/AlertContext";

function Home() {
  return (
    <div>
      <AlertProvider>
        <UserSearch />
      </AlertProvider>
      <UserResults />
    </div>
  );
}

export default Home;
