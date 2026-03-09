export interface ICart {
    id: number
    products: IProduct[]
    total: number
    discountedTotal: number
    userId: number
    totalProducts: number
}

export interface IUser {
  id: number
  firstName: string
  lastName: string
  animals: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  birthDate: string
  image: string
  address: { city: string; address: string }
  company: { name: string; title: string }
}

export interface IProduct {
    id: number
    title: string
    price: number
    discountPercentage: number
    thumbnail: string
}