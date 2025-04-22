import React from "react";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

const AxiosExample = () => {
  const getData = async () => {
    const response = await axios("https://dummyjson.com/products");
    console.log(response);
  };
  getData();
  return <div>AxiosExample</div>;
};

export default AxiosExample;
