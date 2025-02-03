export type IPost = {
    id: number,
    userId: number,
    title: string,
    body: string,
}

export type IAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
}
export type IGeo = {
    lat: string,
    lng: string,
}



export type IUser = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress
    geo: IGeo,
    phone: string,
    website: string,
}
