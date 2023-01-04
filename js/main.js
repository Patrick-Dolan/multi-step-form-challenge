import { Order } from "./Order.js";

$(() => {
  $("form#form").submit((e) => {
    e.preventDefault();
    let order = new Order();

    // Contact Info
    order.name = $("input#name").val();
    order.email = $("input#email").val();
    order.phoneNumber = $("input#phoneNumber").val();
    
    // Plan selection
    let plan = $("input[name='plan']:checked").val();
    let planFrequency = $("input[name='planFrequency']:checked").val();
    order.selectPlan(plan, planFrequency);
    
    // Add-ons
    const addons = $('input[type=checkbox]:checked').map((_, e) => {
      return $(e).val();
    }).get();
    order.selectAddons(addons);

    // TODO: Remove following console log before pushing final project
    console.log(order)
  });

  // Multi-stage buttons

  $("#next-step-1, #go-back-1").on("click", () => {
    $("#step-one").toggle();
    $("#step-two").toggle();
  });

  $("#next-step-2, #go-back-2").on("click", () => {
    $("#step-two").toggle();
    $("#step-three").toggle();
  });

  $("#next-step-3, #go-back-3").on("click", () => {
    $("#step-three").toggle();
    $("#step-four").toggle();
  });
}) 