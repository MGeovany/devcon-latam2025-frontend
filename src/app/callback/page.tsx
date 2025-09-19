import { redirect } from "next/navigation";
import { workos } from "~/lib/workos";

interface CallbackPageProps {
  searchParams: {
    code?: string;
    error?: string;
  };
}

export default async function CallbackPage({ searchParams }: CallbackPageProps) {
  const { code, error } = searchParams;

  if (error) {
    console.error("WorkOS authentication error:", error);
    redirect("/?error=auth_failed");
  }

  if (!code) {
    console.error("No authorization code received");
    redirect("/?error=no_code");
  }

  try {
    // Exchange code for access token
    const tokenResponse = await workos.exchangeCodeForToken(code);
    
    // Get user profile
    const userProfile = await workos.getUserProfile(tokenResponse.access_token);
    
    console.log("User authenticated:", userProfile);
    
    // Here you would typically:
    // 1. Save user to database
    // 2. Create session
    // 3. Set cookies
    
    // For now, redirect to dashboard or home with success
    redirect("/?success=true");
    
  } catch (error) {
    console.error("Authentication failed:", error);
    redirect("/?error=auth_failed");
  }
}
