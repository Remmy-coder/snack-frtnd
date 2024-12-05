import { LoginFormData } from "~/routes/login";
import { RegisterFormData } from "~/routes/register";

const BASE_URL = `http://localhost:3000`;

export const login = async (data: LoginFormData) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message || "Login failed");
  }

  return responseBody;
};

export const register = async (data: RegisterFormData) => {
  const response = await fetch(`${BASE_URL}/clients/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message || "Registration failed");
  }

  return responseBody;
};
