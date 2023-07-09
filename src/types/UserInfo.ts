export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUserInfo {
  id: string;
  email: string;
  phone: number;
  website: string;
  address: IAddress;
  company: ICompany;
}
