export interface HumanType {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: AddressType,
    description: string
};

export interface SortingType {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string
};

type AddressType = {
    streetAddress: string,
    city: string,
    state: string,
    zip: string
}