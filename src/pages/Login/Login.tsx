import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { login } from "../../service/auth.service";
import { UserContext } from "../../util/context.util";
import { makeId } from "../../util/random.util";
import "./Login.scss";

const Login = () => {
    const context = useContext(UserContext);

    return (
        <div>
            SPLASH FOR LOGIN
        </div>
    );
}

export default Login;