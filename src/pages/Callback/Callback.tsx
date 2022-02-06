import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SpotifyAuth } from "../../service/auth.service";
import { UserContext } from "../../util/context.util";

const Callback = () => {
    const location = useLocation();
    const context = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        const params = new URLSearchParams(location.hash.substring(1));
        if (context.state.loginState !== params.get("state")) {
            console.warn("State does not match");
            navigate("/");
        }
        if (params.get("error")){
            console.warn("Error from auth", params.get("error"));
        } else {
            const spotifyAuth = new SpotifyAuth(params.get("access_token") || "",params.get("token_type") || "", params.get("expires_in") || "0", params.get("state") || "",);
            context.dispatch({type: "SET_SPOTIFY_AUTH", data: spotifyAuth});
            navigate("/app", {replace: true});
        }
    },[context, location.hash, navigate]);

return (
    <></>
);
}

export default Callback;
