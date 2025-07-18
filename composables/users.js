import { jwtDecode } from "jwt-decode";

export function checkToken() {
    if (typeof window === 'undefined') return { user: null, isLoggedIn: false }

    const token = localStorage.getItem('token')
    if (!token) return { user: null, isLoggedIn: false }

    try {
        const decoded = jwtDecode(token)
        return {
            user: decoded,         // จะมี .email, .user_id, .role ได้ถ้าอยู่ใน token
            isLoggedIn: true
        }
    } catch (e) {
        return { user: null, isLoggedIn: false }
    }
}

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