define(["jquery", "Magento_Customer/js/customer-data"], function(
  $,
  customerData
) {
  "use strict";
  return function(config, element) {
    const fullname = customerData
      .get("customer")()
      .fullname.split(" ");
    const firstname = fullname[0];
    const lastname = fullname[1];
    if (typeof fullname === "undefined") {
      customerData.reload("customer");
    }
    const check = setInterval(function() {
      const fullname = customerData.get("customer")().fullname;
      if (fullname) {
        $(element).text(`${lastname} ${firstname}`);
        clearInterval(check);
      }
    }, 500);
  };
});
