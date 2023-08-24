"use client";
import Link from "next/link";
import { getCookies, deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    const handleLogout = async () => {
        // @ts-ignore
        const { session } = getCookies("session");
        // @ts-ignore
        deleteCookie("session", session);

        router.push("/auth/login");
    };

    return (
        <nav className="mb-12 flex justify-between">
            <ul className="flex gap-4">
                <Link href="/dashboard">/dashboard</Link>
                <Link href="/profile">/profile</Link>
                <Link href="/settings">/settings</Link>
            </ul>

            <button
                className="py-2 px-6 rounded-full bg-black text-white font-bold tracking-wider"
                type="button"
                onClick={handleLogout}
            >
                Logout
            </button>
        </nav>
    );
};

export default Navbar;
