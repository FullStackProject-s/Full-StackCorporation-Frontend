import React from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies();

  const getToken = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/token/",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (e) => {
    await getToken();

    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/login/",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="justify-center flex ">
      <div className="w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mt-10">
        <div className="relative mb-4">
          <input
            type="text"
            id="full-name"
            name="full-name"
            className="base-input"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="relative mb-4">
          <input
            type="password"
            id="password"
            name="password"
            className="base-input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <input />
        <button
          type="submit"
          onClick={login}
          className="text-white bg-indigo-500
        border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600
        rounded text-lg"
        >
          Button
        </button>
      </div>
    </div>
  );
};
