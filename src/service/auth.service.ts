
export class SpotifyAuth {
    access_token: string;
    token_type: string;
    expires_in: number;
    state: string;

    constructor(accessToken: string, tokenType: string, expiresIn: string, state: string) {
        this.access_token = accessToken;
        this.token_type = tokenType;
        this.expires_in = parseInt(expiresIn);
        this.state = state;
    }
}

export const login = (state: string) => { 
    let scope = "user-read-private user-read-email";
    
    let url = "https://accounts.spotify.com/authorize?response_type=token";
    url += "&client_id=" + process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    url += '&scope=' + scope;
    url += '&redirect_uri=http://localhost:3000/callback';
    url += '&state=' + state;

    window.location.href = url;

};

