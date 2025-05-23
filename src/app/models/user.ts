export interface Iregister {
  id?: number;
  name: string;
  email: string;
  is_premium?: boolean;
  password: string;
  token?: string;


}

export interface Ilogin {
  email: string;
  password: string;

}


