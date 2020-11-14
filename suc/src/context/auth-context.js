import React from 'react';

export default React.createContext({
    token: null,
    userId: null,
    userType: null,
    idUser: null,
    login: (token, userId, userType, tokenExpiration) => {},
    logout: () => {},
    signUp:(userId) => {},
});