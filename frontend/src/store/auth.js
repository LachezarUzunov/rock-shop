import { signal } from "@preact/signals-react";

const tokenFromStorage = localStorage.getItem('token');
const userFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

export const auth = {
    token: signal(tokenFromStorage),
    user: signal(userFromStorage),

    login(token, user) {
        this.token.value = token;
        this.user.value = user;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
    },

    logout() {
        this.token.value = null;
        this.user.value = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    isAuthenticated() {
        return !! this.token.value;
    }
}