import React, { useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../util/context.util";

const Callback = () => {
    const [searchParams] = useSearchParams();
    const context = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (searchParams.get("state") !== context.state.loginState) {
            console.error("State did not match, aborting");
            context.dispatch({type: "SET_LOGIN_STATE", data: null});
            navigate("/");
        };
        if (searchParams.get("error")) {
            console.warn("Authorization Failed", searchParams.get("error"));
            navigate("/");
        }
        if (searchParams.get("code")) {
            console.log("code received");
        } else {
            console.warn("No code response");
            navigate("/");
        }
    },[]);

return (
    <div>
      Callback {context.state.loginState}
    </div>
);
}

export default Callback;
