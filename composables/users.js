import { jwtDecode } from "jwt-decode";

export const checkToken = () => {
    if (typeof window !== 'undefined') {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000; // Current time in seconds
                if (decodedToken.exp < currentTime) {
                    localStorage.removeItem('token');
                    return null;
                } else {
                    return decodedToken;
                }
            } catch (error) {
                console.error("Invalid token", error);
                localStorage.removeItem('token');
                return null;
            }

        } else {
            return null;
        }
    }
};

export const getUsers = async () => {
    // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    // const cleanedToken = token.replace(/^"|"$/g, '');

    const response = await fetch('http://localhost:3001/get/users', {
        // headers: {
        //     'Authorization': `Bearer ${cleanedToken}`
        // }
    });
    const data = await response.json();
    const status = response.status;
    return { data, status };
}

export const register = async (form) => {
    try {
        const response = await fetch('http://localhost:3001/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const data = await response.json();
        const status = response.status;
        return { data, status };
    } catch (error) {
        console.error('Register error:', error.data || error);
        throw error;
    }
}

export const login = async (form) => {
    try {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const data = await response.json();
        const status = response.status;
        return { data, status };
    } catch (error) {
        console.error('Login error:', error.data || error);
        throw error;
    }
}