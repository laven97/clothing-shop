import axios from "axios";
import { IProduct } from "../interfaces/product/product.interface";

const api = axios.create({
  baseURL: "https://dummyjson.com/docs",
});

interface IAnswer {
  products: IProduct[];
}

export async function getProducts(): Promise<IAnswer[]> {
  const res = await api.get<IAnswer[]>("/products");
  return res.data;
}

export async function getProductById(productId: string): Promise<IAnswer> {
  const res = await api.get(`/products/${productId}`);
  return res.data;
}
