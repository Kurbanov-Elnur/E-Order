import { Navigate } from 'react-router-dom';

const hasAccess = (isAuthenticated: boolean, hasPermission: boolean) => {
    return isAuthenticated && hasPermission;
};

const PrivateRoute = ({
    children,
    isAuthenticated,
    hasPermission,
}: {
    children: JSX.Element;
    isAuthenticated: boolean;
    hasPermission: boolean;
}) => {
    return hasAccess(isAuthenticated, hasPermission) ? (
        children
    ) : (
        <Navigate to="/auth" />
    );
};

export default PrivateRoute;