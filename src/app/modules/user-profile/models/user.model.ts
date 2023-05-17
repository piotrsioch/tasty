export interface User {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  address?: string;
  phoneNumber?: string;
  birthDate?: Date;
}
