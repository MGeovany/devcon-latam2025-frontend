"use client";

import { workos } from "~/lib/workos";

export default function HomePage() {
  const handleWorkOSLogin = () => {
    // Generate a random state for security
    const state = Math.random().toString(36).substring(2, 15);
    
    // Get the WorkOS authorization URL
    const authUrl = workos.getAuthorizationUrl(state);
    
    // Redirect to WorkOS
    window.location.href = authUrl;
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
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
