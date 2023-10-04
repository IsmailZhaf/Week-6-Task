"use client";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";

export const AuthLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitLogin = async () => {
    console.log(loginData);
    const res = await fetch("/api/v1/Auth/Login", {
      method: "POST",
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <main className="h-screen w-full grid grid-cols-2">
      <div className="bg-indigo-500"></div>
      <div className="flex justify-center items-center">
        <div className="w-[320px] space-y-2">
          <Input name="email" placeholder="email" onChange={handleChange} />
          <Input name="password" placeholder="password" type="password" onChange={handleChange} />
          <Button onClick={handleSubmitLogin}>Login</Button>
        </div>
      </div>
    </main>
  );
};
