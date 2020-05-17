export interface User {
  email: string;
  username: string;
  mobile?: number;
  dni?: string;
  address?: string;
  registrationDate?: Date;
  active?: boolean;
  roles?: string[];
}
