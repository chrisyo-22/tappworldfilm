

/**
 * Example of an User Object
 *   {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
 */


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