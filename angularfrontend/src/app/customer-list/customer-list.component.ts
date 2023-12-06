import {Component, OnInit} from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    /*this.customers = [
      {
        "id": 1,
        "firstName": "sehan",
        "lastName": "ranaweera",
        "email": "sehanranaweera2002@gmail.com",
        "contactNumber": 712400168
      },
      {
        "id": 2,
        "firstName": "ranaweera",
        "lastName": "gayanath",
        "email": "ranaweerasehan1995@gmail.com",
        "contactNumber": 717741744
      }
    ]*/
    this.getCustomers();
  }

  private getCustomers() {
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data;
    })
  }
}
