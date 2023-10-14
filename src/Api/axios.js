import axios from "axios";
import {URL} from './Api'

const instance = axios.create({
    URL : URL,
});


export default instance ;