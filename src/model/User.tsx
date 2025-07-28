type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

type Company = {
    name: string;
    catchPhrase : string;
    bs: string;
}

type UserInfo = User & {
    address: Address;
    company: Company;
}

export default UserInfo;