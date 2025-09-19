import { redirect } from "next/navigation";
import { workos } from "~/lib/workos";

interface CallbackPageProps {
  searchParams: {
    code?: string;
    error?: string;
  };
}

export default async function CallbackPage({
  searchParams,
}: CallbackPageProps) {
  console.log("Callback page called with searchParams:", searchParams);
  
  const { code, error } = searchParams;

  if (error) {
    console.error("WorkOS authentication error:", error);
    redirect("/?error=auth_failed");
  }

  if (!code) {
    console.error("No authorization code received");
    redirect("/?error=no_code");
  }

  console.log("Authorization code received:", code);

  try {
    console.log("Attempting to exchange code for token...");
    // Exchange code for access token
    const tokenResponse = await workos.exchangeCodeForToken(code);
    console.log("Token response received:", !!tokenResponse.access_token);

    console.log("Attempting to get user profile...");
    // Get user profile
    const userProfile = await workos.getUserProfile(tokenResponse.access_token);
    console.log("User profile received:", userProfile);

    // Here you would typically:
    // 1. Save user to database
    // 2. Create session
    // 3. Set cookies

    // For now, redirect to dashboard or home with success
    console.log("Redirecting to success page...");
    redirect("/?success=true");
  } catch (error) {
    console.error("Authentication failed:", error);
    redirect("/?error=auth_failed");
  }
}
