import axios from "axios";
import { API_CONFIG } from "@/config/apiConfig";

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "APIKEY": `Bearer ${API_CONFIG.API_KEY}`, 
    "x-api-key": API_CONFIG.API_KEY 
  }
});

export default api;
