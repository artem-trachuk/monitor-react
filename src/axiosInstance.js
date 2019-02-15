import axios from 'axios';
import {serverURL} from "./helpers/serverURL";
export const axiosHttpClient = axios.create({
    baseURL: serverURL + "api/"
});