export interface IUser {
  id: number;
  avatar_url: string;
  name: string;
  username: string;
}

export interface IToken {
  id: number;
  logo_url: string;
  name: string;
  code: string;
  price: number; // USD
  network_fee: number; // USD
  user_balance: number;
}
