import axios from "axios";

// Создаем экземпляр клиента Axios
const axiosClient = axios.create({
  baseURL: "http://www.thecocktaildb.com/api/json/v1/1/", // Указываем адрес нашего прокси-сервера
});

export default axiosClient;
