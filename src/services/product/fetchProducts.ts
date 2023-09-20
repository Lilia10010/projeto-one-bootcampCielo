import axiosInstance from '@/libs/axios'

export interface Product {
  id: string
  name: string
  avatar: string
  description: string
  price: number
  rating: number
  category: string
}

export default async function fetchProducts(): Promise<Product[]> {
  const response = await axiosInstance('/products')

  return response.data
}
