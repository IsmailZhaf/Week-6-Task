"use client";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";

export const AuthRegister = () => {
    const [registerData, setRegisterData] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setRegisterData({...registerData, [name] :value});
    }   

    const handleSubmitRegister = async () =>{
        console.log(registerData)
        const res = await fetch("/api/v1/Auth/Register", {
            method:"POST",
            body: JSON.stringify(registerData)
        })
        const data = await res.json();
        console.log(data);
    }
    
    return (
    <main className="h-screen w-full grid grid-cols-2">
      <div className="bg-indigo-500"></div>
      <div className="flex justify-center items-center">
        <div className="w-[320px] space-y-2">
          <Input name="name" placeholder="name" onChange={handleChange} />
          <Input name="email" placeholder="email" onChange={handleChange} />
          <Input name="password" placeholder="password" type="password" onChange={handleChange} />
          <Button onClick={handleSubmitRegister}>Register</Button>
        </div>
      </div>
    </main>
  );
};
