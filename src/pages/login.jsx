import React from "react";
import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const getToken = async () => {
    try {
      const res = await axios.post(
        "http://localhost:6969/auth/token/tokens-obtain/",
        {
          username: username,
          password: password,
        },
        { withCredentials: true }
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const data_1 = async () => {
    const { access } = await getToken();
    console.log(access);
    try {
      const res = await axios.get("http://localhost:6969/team/all-teams/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const data_2 = async () => {
    const { access } = await getToken();
    console.log(access);
    try {
      const res = await axios.get("http://localhost:6969/project/all-projects/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const data_3 = async () => {
    const { access } = await getToken();
    console.log(access);
    try {
      const res = await axios.get("http://localhost:6969/organization/all-organizations/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const data_4 = async () => {
    const { access } = await getToken();
    console.log(access);
    try {
      const res = await axios.get("http://localhost:6969/developer/all-developers/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
   const test = async (e) => {
     e.preventDefault()
     await data_1()
     await data_2()
     await data_3()
     await data_4()
   }
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
          onClick={test}
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
