import { handleAuth } from "@workos-inc/authkit-nextjs";
import type { NextRequest } from "next/server";

export const GET = handleAuth() as (request: NextRequest) => Promise<Response>;
export const POST = handleAuth() as (request: NextRequest) => Promise<Response>;
