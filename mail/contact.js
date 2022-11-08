// if ($.trim($("#name, #email, #tel, #gender, #subject, #message").val()) === "") {
//     $('#contactForm').submit(function(e) {
//         e.preventDefault();
//         alert('you did not fill out one of the fields');
//     })
// } 

// $(function () {

//     $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
//         preventSubmit: true,
//         submitError: function ($form, event, errors) {
//         },
//         submitSuccess: function ($form, event) {
//             event.preventDefault();
//             var name = $("input#name").val();
//             var email = $("input#email").val();
//             var subject = $("input#subject").val();
//             var message = $("textarea#message").val();

//             $this = $("#sendMessageButton");
//             $this.prop("disabled", true);

//             $.ajax({
//                 url: "contact.php",
//                 type: "POST",
//                 data: {
//                     name: name,
//                     email: email,
//                     subject: subject,
//                     message: message
//                 },
//                 cache: false,
//                 success: function () {
//                     $('#success').html("<div class='alert alert-success'>");
//                     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                             .append("</button>");
//                     $('#success > .alert-success')
//                             .append("<strong>Your message has been sent. </strong>");
//                     $('#success > .alert-success')
//                             .append('</div>');
//                     $('#contactForm').trigger("reset");
//                 },
//                 error: function () {
//                     $('#success').html("<div class='alert alert-danger'>");
//                     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                             .append("</button>");
//                     $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
//                     $('#success > .alert-danger').append('</div>');
//                     $('#contactForm').trigger("reset");
//                 },
//                 complete: function () {
//                     setTimeout(function () {
//                         $this.prop("disabled", false);
//                     }, 1000);
//                 }
//             });
//         },
//         filter: function () {
//             return $(this).is(":visible");
//         },
//     });

//     $("a[data-toggle=\"tab\"]").click(function (e) {
//         e.preventDefault();
//         $(this).tab("show");
//     });
// });

// $('#name').focus(function () {
//     $('#success').html('');
// });





// var currentDateTime = new Date();
// var year = currentDateTime.getFullYear();
// var month = (currentDateTime.getMonth() + 1);
// var date = (currentDateTime.getDate() + 1);

// if(date < 10) {
//   date = '0' + date;
// }
// if(month < 10) {
//   month = '0' + month;
// }

// var dateTomorrow = year + "-" + month + "-" + date;
// var checkinElem = document.querySelector("#checkin-date");
// var checkoutElem = document.querySelector("#checkout-date");

// checkinElem.setAttribute("min", dateTomorrow);

// checkinElem.onchange = function () {
//     checkoutElem.setAttribute("min", this.value);
// }