$(() => {
  $("form#form").submit((e) => {
    e.preventDefault();
    console.log(`Form: ${$("input#name").val()}`);
    console.log(`Form: ${$("input#email").val()}`);
    console.log(`Form: ${$("input#phoneNumber").val()}`);
    
    // Plan selection
    let plan = $("input[name='plan']:checked").val();
    let planFrequency = $("input[name='planFrequency']:checked").val();
    console.log(plan);
    console.log(planFrequency);

    // Add-ons

    const addons2 = $('input[type=checkbox]:checked').map((_, e) => {
      return $(e).val();
    }).get();
    console.log(addons2)
  });

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