/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const customAxiosInstance: AxiosInstance = axios.create({
        baseURL: "http://localhost:4000",
      });

      const response = await customAxiosInstance.post("/users", formData);

      // Handle the response, e.g., log it or update state
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      id="my-form"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "80vh",
        gap: "10px",
      }}
    >
      <input
        type="text"
        name="fullname"
        value={formData.fullname}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
