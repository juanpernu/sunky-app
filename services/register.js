import { axiosInstance } from "../utils";

export function bussinesSignup(params) {
  const body = params;

  return axiosInstance.post("/business/register", body);
}

export function customersSignup(params) {
  const body = params;

  return axiosInstance.post("/customers/register", body);
}
