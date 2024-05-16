import { Injectable } from '@angular/core';

export class Vendor {
  public id: number = 0;
  public name: string = "";
  public image: string = "";
  public wallet: string = "";
}

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

  public vendors: Map<number, Vendor> = new Map<number, Vendor>();

  constructor() {
    let vendorsAlmacen: any[] = [
      { id: 1, name: "Jon Snow", image: "https://thronesapi.com/assets/images/jon-snow.jpg", wallet: "0x1234567890" },
      { id: 2, name: "Daenerys Targaryen", image: "https://thronesapi.com/assets/images/daenerys.jpg", wallet: "0x1234567890" },
      { id: 3, name: "Arya Stark", image: "https://thronesapi.com/assets/images/arya-stark.jpg", wallet: "0x1234567890" },
      { id: 4, name: "Sansa Stark", image: "https://thronesapi.com/assets/images/sansa-stark.jpeg", wallet: "0x1234567890" },
      { id: 5, name: "Brandon Stark", image: "https://thronesapi.com/assets/images/bran-stark.jpg", wallet: "0x1234567890" },
      { id: 6, name: "Ned Stark", image: "https://thronesapi.com/assets/images/ned-stark.jpg", wallet: "0x1234567890" },
      { id: 7, name: "Robert Baratheon", image: "https://thronesapi.com/assets/images/robert-baratheon.jpeg", wallet: "0x123456789" },
      { id: 8, name: "Jamie Lannister", image: "https://thronesapi.com/assets/images/jaime-lannister.jpg", wallet: "0x123456789" },
      { id: 9, name: "Cersei Lannister", image: "https://thronesapi.com/assets/images/cersei.jpg", wallet: "0x123456789" },
      { id: 10, name: "Cateyln Stark", image: "https://thronesapi.com/assets/images/catelyn-stark.jpg", wallet: "0x123456789" },
    ];
    this.vendors = new Map<number, Vendor>(Array.from(vendorsAlmacen).map((value) => [value.id, value]));
  }

  async getVendorById(id: number) {
    return this.vendors.get(id);
  }

  async getVendorsList() {
    return Array.from(this.vendors.values());
  }

  getRandomVendor() {
    return this.vendors.get(Math.floor(Math.random() * this.vendors.size) + 1);
  }


}
