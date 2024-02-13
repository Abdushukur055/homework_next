"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js'in v9.5.5 sürümünden itibaren next/router olarak değiştirilmiştir.

interface FormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      username: e.target.value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", formData.username);
    console.log("Password:", formData.password);

    if (formData.username === "admin" && formData.password === "1234") {
      router.push("/components/cars");
    } else {
     alert("username yoki password ");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-[100px] mb-[50px] text-[30px]">Login</h1>
        <form
          className="flex flex-col justify-center items-center gap-[20px]"
          onSubmit={handleSubmit}
        >
          <input
            className="w-[150px] p-[10px] px-[30px] border-gray-400 rounded-xl  border-[2px]"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleUsernameChange}
          />
          <input
            className="w-[150px] p-[10px] px-[30px] border-gray-400 rounded-xl border-[2px]"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handlePasswordChange}
          />
          <button
            type="submit"
            className="w-[100px] text-white text-center bg-slate-800 rounded-xl p-[10px]"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
