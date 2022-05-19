import { IAisleDiscount } from 'app/shared/model/aisle-discount.model';

export interface ICustomer {
  id?: number;
  customerId?: string | null;
  age?: string | null;
  gender?: string | null;
  aisleDiscounts?: IAisleDiscount[] | null;
}

export const defaultValue: Readonly<ICustomer> = {};
