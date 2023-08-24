import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const session = req.cookies.get("session");

    const redirect = (url: string, reqUrl: string) => {
        return NextResponse.redirect(new URL(url, reqUrl));
    };
    const startsWith = (url: string) => {
        return req.nextUrl.pathname.startsWith(url);
    };

    if (!session) {
        switch (true) {
            case startsWith("/dashboard"):
            case startsWith("/profile"):
            case startsWith("/settings"):
                return redirect("/auth/login", req.url);
        }
    }

    if (startsWith('/auth/login')) return redirect("/dashboard", req.url);
}
