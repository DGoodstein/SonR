import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { login } from "../../service/auth.service";
import { UserContext } from "../../util/context.util";
import { makeId } from "../../util/random.util";
import "./Login.scss";

const Login = () => {
    const context = useContext(UserContext);

    const handleLogin = () => {
        const loginState = makeId(32);
        context.dispatch({type: "SET_LOGIN_STATE", data: loginState});
        login(loginState);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleLogin}>Log in with Spotify</Button>
        </div>
    );
}

export default Login;