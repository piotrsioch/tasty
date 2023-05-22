/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from './granted-authority';
import { Links } from './links';
export interface EntityModelUser {
  '_links'?: Links;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  address?: string;
  authorities?: Array<GrantedAuthority>;
  birthDate?: string;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  password?: string;
  phoneNumber?: string;
  role?: 'USER' | 'ADMIN';
  username?: string;
}
