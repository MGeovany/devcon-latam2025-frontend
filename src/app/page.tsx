"use client";

import { WorkOSClient } from "~/lib/workos";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const success = searchParams.get("success");

  console.log("HomePage rendered with error:", error, "success:", success);

  const handleWorkOSLogin = () => {
    console.log("WorkOS login button clicked");
    
    // Generate a random state for security
    const state = Math.random().toString(36).substring(2, 15);
    console.log("Generated state:", state);
    
    // Get the WorkOS authorization URL
    const authUrl = WorkOSClient.getAuthorizationUrl(state);
    console.log("Auth URL from WorkOSClient:", authUrl);
    
    // Redirect to WorkOS or show error
    console.log("Redirecting to:", authUrl);
    window.location.href = authUrl;
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        {/* Error/Success Messages */}
        {error && (
          <div className="mb-4 rounded-lg border-2 border-red-500 bg-red-50 p-4 text-center">
            <p className="text-red-700">
              {error === "workos_not_configured"
                ? "WorkOS not configured. Please set up environment variables."
                : "Authentication failed. Please try again."}
            </p>
          </div>
        )}

        {success && (
          <div className="mb-4 rounded-lg border-2 border-green-500 bg-green-50 p-4 text-center">
            <p className="text-green-700">Authentication successful!</p>
          </div>
        )}

        {/* WorkOS Login */}
        <div className="rounded-lg border-2 border-black bg-white p-8 shadow-lg">
          <h2 className="mb-8 text-center text-2xl font-semibold text-black">
            Welcome to ABC Kids
          </h2>

          <div className="space-y-6">
            <p className="text-center text-gray-600">
              Sign in to access your learning dashboard
            </p>

            <button
              type="button"
              onClick={handleWorkOSLogin}
              className="w-full rounded-lg bg-black px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
            >
              Sign in with WorkOS
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
