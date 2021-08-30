import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";


const ConditionRoute = ({ component: Component, type, ...rest }) => {


    return (
        <Route
            {...rest}
            render={props => {
                if (type == 'auth' && localStorage.admin_token) {
                    return <Redirect to="/dashboard" />
                } else if (type == 'private' && !localStorage.admin_token) {
                    return <Redirect to="/login" />
                }
                return <Component {...props} />
            }}
        />
    )

};

export default ConditionRoute;