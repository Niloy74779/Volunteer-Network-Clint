import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const AdminRoute = ({ children, ...rest }) => {
    const [user] = useContext(UserContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email === 'sayeedsayem8@gmail.com' || 'sayemdsayeed.professional@gmail.com' ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default AdminRoute;