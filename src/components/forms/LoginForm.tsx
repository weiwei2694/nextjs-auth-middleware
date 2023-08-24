"use client";
import { FormEvent } from "react";

const LoginForm = () => {
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: handle user login
    }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input type="email" required name="email" id="email" placeholder="email" className="input" />
        <input type="password" required name="password" id="password" placeholder="password" className="input" />
        <button type="submit" className="button__submit">Login</button>
    </form>
  )
}

export default LoginForm