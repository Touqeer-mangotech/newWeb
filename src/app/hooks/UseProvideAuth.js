import { useState } from "react";

function useProvideAuth() {

  // *User
  const userLogin = (data) => {

  };

  const userLogout = async () => {

    localStorage.clear()
  };

  // *Verify Token
  const verifyToken = () => {

  };

  return {
  };
}

export default useProvideAuth;