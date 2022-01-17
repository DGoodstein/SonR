import { makeId } from "../util/random.util"
import SHA from "sha.js";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useContext } from "react";
import { UserContext } from "../util/context.util";

export const login = (state: string) => { 
    let scope = "user-read-private user-read-email";
    let verifier = SHA("sha256").update(scope).digest("hex");
    
    let url = "https://accounts.spotify.com/authorize?response_type=code";
    url += "&client_id=" + process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    url += '&scope=' + scope;
    url += '&redirect_uri=' + "http://localhost:3000/callback";
    url += '&state=' + state;

    window.location.href = url;
    // let authParams = {
    //     client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    //     response_type: "code",
    //     scope: scope,
    //     state: state,
    //     redirect_uri: "http://localhost:3000/success",
    //     code_challenge_method: "S256",
    //     code_challenge: verifier
    // };
    // axios.get("https://accounts.spotify.com/authorize", {headers: {"Access-Control-Allow-Origin":  "http://localhost:3000"}, params: authParams},)
    //     .then((resp: AxiosResponse) => {
    //         console.log("Success", resp);
    //     }).catch((error: AxiosError) => {
    //         console.log("error", error);
    //     });
}
