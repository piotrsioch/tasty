/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from './granted-authority';
export interface User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  address?: string;
  authorities?: Array<GrantedAuthority>;
  birthDate?: string;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  firstName?: string;
  id?: number;
  lastName?: string;
  middleName?: string;
  password?: string;
  phoneNumber?: string;
  role?: 'USER' | 'ADMIN';
  username?: string;
}
