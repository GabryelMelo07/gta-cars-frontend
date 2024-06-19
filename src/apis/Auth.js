import axios from 'axios';
import { API_URL } from '../constants/env';

const Auth = {
    login: async (user) => {
        const URL = `${API_URL}/auth/login`;
        return await axios.post(URL, user)
            .then((res) => {
                const { accessToken } = res.data;
                localStorage.setItem('accessToken', accessToken);
            })
            .catch(error => {
                console.error('Erro ao fazer login:', error);
                throw new Error(error);
            });
    },
    register: async (user) => {
        const URL = `${API_URL}/auth/register`;
        return await axios.post(URL, user)
            .then((res) => res)
            .catch(error => {
                console.error('Erro ao cadastrar usuário:', error);
                throw new Error(error);
            });
    }
}

export default Auth;