import { AppBar, Button, Toolbar } from "@material-ui/core";
import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../service/auth.service";
import { UserContext } from "../../util/context.util";
import { makeId } from "../../util/random.util";
import "./Header.scss";

const Header = () => {
    const context = useContext(UserContext);
    const navigate = useNavigate();
    
    const handleLogin = () => {
        const loginState = makeId(32);
        const loginVerifier = makeId(96);
        context.dispatch({type: "SET_LOGIN_STATE", data: loginState});
        login(loginState);
    };

    const handleLogout = () => {
        context.dispatch({type: "LOGOUT"});
        navigate("/");
    };

    return (
        <AppBar className="header-container" position="static">
            <Toolbar>
                <Button variant="text" onClick={context.state.loggedIn? handleLogout : handleLogin}>{context.state.loggedIn ? "Log out" : "Log in with Spotify"}</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;