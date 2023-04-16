import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function DefaultLayout() {
    const { user, token } = useStateContext();

    //deny access to any route if the access token is not set
    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Default Layout</h1>
            <Outlet />
        </div>
    );
}

export default DefaultLayout;
