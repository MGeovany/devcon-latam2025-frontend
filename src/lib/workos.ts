export class WorkOSClient {
  private apiKey: string;
  private clientId: string;
  private redirectUri: string;

  constructor() {
    // Server-side only - these should not be accessed on client
    this.apiKey = process.env.WORKOS_API_KEY || "";
    this.clientId = process.env.WORKOS_CLIENT_ID || "";
    this.redirectUri = process.env.NEXT_PUBLIC_WORKOS_REDIRECT_URI || "";

    console.log("WorkOSClient constructor called");
    console.log("API Key exists:", !!this.apiKey);
    console.log("Client ID exists:", !!this.clientId);
    console.log("Redirect URI exists:", !!this.redirectUri);
  }

  /**
   * Generate the WorkOS authorization URL (client-side safe)
   */
  static getAuthorizationUrl(state?: string): string {
    console.log("getAuthorizationUrl called with state:", state);

    const clientId = process.env.NEXT_PUBLIC_WORKOS_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_WORKOS_REDIRECT_URI;

    console.log("Environment variables:");
    console.log("NEXT_PUBLIC_WORKOS_CLIENT_ID:", clientId);
    console.log("NEXT_PUBLIC_WORKOS_REDIRECT_URI:", redirectUri);

    if (!clientId || !redirectUri) {
      console.warn(
        "WorkOS not configured. Please set NEXT_PUBLIC_WORKOS_CLIENT_ID and NEXT_PUBLIC_WORKOS_REDIRECT_URI",
      );
      // Return a placeholder URL that shows an error
      return "/?error=workos_not_configured";
    }

    const params = new URLSearchParams({
      client_id: clientId,
      response_type: "code",
      redirect_uri: redirectUri,
      ...(state && { state }),
    });

    const authUrl = `https://api.workos.com/sso/authorize?${params.toString()}`;
    console.log("Generated auth URL:", authUrl);

    return authUrl;
  }

  /**
   * Exchange authorization code for access token
   */
  async exchangeCodeForToken(
    code: string,
  ): Promise<{ access_token: string; user: any }> {
    const response = await fetch("https://api.workos.com/sso/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: this.clientId,
        client_secret: this.apiKey,
        code,
        redirect_uri: this.redirectUri,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to exchange code for token");
    }

    return response.json();
  }

  /**
   * Get user profile from WorkOS
   */
  async getUserProfile(accessToken: string): Promise<any> {
    const response = await fetch("https://api.workos.com/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get user profile");
    }

    return response.json();
  }
}

export const workos = new WorkOSClient();
