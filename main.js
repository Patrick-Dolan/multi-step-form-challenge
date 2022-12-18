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
}) 