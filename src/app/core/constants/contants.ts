const apiUrl = 'http://localhost:4102/api';

export const ApiEndpoints = {
    Auth: {
        Login: `${apiUrl}/users/login`,
        Register: `${apiUrl}/users/register`,
        Me: `${apiUrl}/users/me`
    }
};

export  const LocalStorage ={
    token: 'user_tokken'
}; 
