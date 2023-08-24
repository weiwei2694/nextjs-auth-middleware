"use client";
import { FormEvent } from "react";

import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

const LoginForm = () => {
    const router = useRouter();

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // @ts-ignore
        const email = e.target.email.value;
        // @ts-ignore
        const password = e.target.password.value;

        setCookie("session", {
            email,
            password,
            token: new Date().getTime().toString(),
        });
        router.push("/dashboard");
    };

    return (
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="email"
                className="input"
            />
            <input
                type="password"
                required
                name="password"
                id="password"
                placeholder="password"
                className="input"
            />
            <button type="submit" className="button__submit">
                Login
            </button>
        </form>
    );
};

export default LoginForm;
