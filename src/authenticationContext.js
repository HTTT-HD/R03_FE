import { createContext, useState, useCallback } from 'react';


export const UserRolesContext = createContext({
    role: undefined,
    // eslint-disable-next-line no-unused-vars
    updateRole: (roles) => { },
    isAuthenticated: false,
    updateIsAuthenticated: (isAuth) => {},
});

export function useUserRolesContext() {
    const [role, setRole] = useState();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const updateRole = useCallback((userRoles) => {
        setRole(userRoles);
    }, []);
    const updateIsAuthenticated = useCallback((isAuth)=> {
         setIsAuthenticated(isAuth);
    }, []);
    return {
        role,
        updateRole,
        isAuthenticated,
        updateIsAuthenticated
    };
}