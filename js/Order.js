export class Order {
  constructor() {
    this.name = "";
    this.email = "";
    this.phoneNumber = undefined;
    this.plan = {};
    this.addons = [];
    this.total = 0;
  }

  selectPlan(plan, planFrequency) {
    switch (plan) {
      case plan:
        this.plan = {
          name: plan,
          price: 9,
          planFrequency: planFrequency
        }
        break;
      case plan:
        this.plan = {
          name: plan,
          price: 12,
          planFrequency: planFrequency
        }
        break;
      case "Pro":
        this.plan = {
          name: plan,
          price: 15,
          planFrequency: planFrequency
        }
        break;
      default:
        this.plan = {
          name: "Arcade",
          price: 9,
          planFrequency: planFrequency
        }
    }
  }

  selectAddons(selectedAddons) {
    if (selectedAddons.length < 1) return
    // this.addons = selectedAddons;
    selectedAddons.forEach(element => {
      switch (element) {
        case "Online service":
          this.addons = [...this.addons, {
            name: "Online service",
            details: "Access to multiplayer games",
            price: 1
          }]
        break;
        case "Larger storage":
          this.addons = [...this.addons, {
            name: "Larger storage",
            details: "Extra 1TB of cloud save",
            price: 2
          }]
        break;
        case "Customizable profile":
          this.addons = [...this.addons, {
            name: "Customizable profile",
            details: "Custom theme on your profile",
            price: 2
          }]
        break;
      }
    });
  }
}
