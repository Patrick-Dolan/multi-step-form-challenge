export class Order {
  constructor() {
    this.name = "";
    this.email = "";
    this.phoneNumber = undefined;
    this.plan = {};
    this.addons = [];
    this.total = 0;
  }
}