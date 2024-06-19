import axios from "axios";
import { API_URL } from "../constants/env";

const axios = axios.create({
    baseURL: API_URL,
});

const token = localStorage.getItem('accessToken');
axios.defaults.headers.common.Authorization = `Bearer ${token}`;