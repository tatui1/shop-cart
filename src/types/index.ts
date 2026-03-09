export interface ICart {
    id: number
    total: number
    discountedTotal: number;
    userId: number
    totalProducts: number
    totalQuantity: number
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