import React, { useContext, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../util/context.util";
import "./Home.scss";

const Home = () => {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const context = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!context.state.spotifyAuth || context.state.spotifyAuth.access_token === "") {
            navigate("/",  {replace: true});
        }
    },[]);

return (
    <div className="main-container">
       Success!
    </div>
);
}

export default Home;
