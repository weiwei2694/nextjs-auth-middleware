// Import the NextResponse module from next/server
import { NextResponse } from "next/server";
// Imports the NextRequest type from next/server
import type { NextRequest } from "next/server";

// Middleware function that receives a req object (NextRequest)
export function middleware(req: NextRequest) {
    // Get the "session" value from the cookie on request
    const session = req.cookies.get("session");

    // Function to perform a redirect to a specific URL
    const redirect = (url: string, reqUrl: string) => {
        return NextResponse.redirect(new URL(url, reqUrl));
    };
    // Function to check if the request URL starts with a specified string
    const startsWith = (url: string) => {
        return req.nextUrl.pathname.startsWith(url);
    };

    // Checks if no session exists
    if (!session) {
        // Uses switch case to check for multiple URLs that start with a certain string
        switch (true) {
            // If the request URL starts with /dashboard, /profile, or /settings
            case startsWith("/dashboard"):
            case startsWith("/profile"):
            case startsWith("/settings"):
                // Performs a redirect to the authentication page
                return redirect("/auth/login", req.url);
        }
    }

    // If the session exist and request URL starts with /auth/login
    if (session && startsWith("/auth/login"))
        // Make a redirect to the dashboard page after logging in
        return redirect("/dashboard", req.url);
}
