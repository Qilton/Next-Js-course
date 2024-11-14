import { type NextRequest } from "next/server";
import { headers,cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headersList = headers();
    // await cookies().set("results per page","20")

    const themeCookie = cookies().get("theme")?.value || "No theme cookie set";
    console.log(themeCookie)
    console.log("Request Authorization:", requestHeaders.get("Authorization") || "No Authorization header in request");
    // console.log("Global Authorization:", headersList.get("Authorization") || "No Authorization header in global context");

    return new Response("Profile Api Data", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie":"theme=Dark",
        }
    });
}
