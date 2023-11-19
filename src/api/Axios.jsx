import axios from "axios";

export default axios.create({
  baseURL: "https://budgetserver-production.up.railway.app",
});
