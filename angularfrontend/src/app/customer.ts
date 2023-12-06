export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: number;

  constructor(id: number, firstName: string, lastName: string, email: string, contactNumber: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.contactNumber = contactNumber;
  }
}
