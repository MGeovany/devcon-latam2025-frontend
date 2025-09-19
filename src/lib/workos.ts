import { env } from "~/env.js";

export class WorkOSClient {
  private apiKey: string;
  private clientId: string;
  private redirectUri: string;

  constructor() {
    this.apiKey = env.WORKOS_API_KEY;
    this.clientId = env.WORKOS_CLIENT_ID;
    this.redirectUri = env.NEXT_PUBLIC_WORKOS_REDIRECT_URI;
  }

  /**
   * Generate the WorkOS authorization URL
   */
  getAuthorizationUrl(state?: string): string {
    const params = new URLSearchParams({
      client_id: this.clientId,
      response_type: 'code',
      redirect_uri: this.redirectUri,
      ...(state && { state }),
    });

    return `https://api.workos.com/sso/authorize?${params.toString()}`;
  }

  /**
   * Exchange authorization code for access token
   */
  async exchangeCodeForToken(code: string): Promise<{ access_token: string; user: any }> {
    const response = await fetch('https://api.workos.com/sso/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: this.clientId,
        client_secret: this.apiKey,
        code,
        redirect_uri: this.redirectUri,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to exchange code for token');
    }

    return response.json();
  }

  /**
   * Get user profile from WorkOS
   */
  async getUserProfile(accessToken: string): Promise<any> {
    const response = await fetch('https://api.workos.com/userinfo', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get user profile');
    }

    return response.json();
  }
}

export const workos = new WorkOSClient();
