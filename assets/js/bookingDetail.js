function openCreatePostPitch() {
  $("#bookingDetailDiv").fadeOut("700");
  $("#createPitchDiv").fadeIn("700");
}
$(document).ready(function () {
  let bookNowInterval = setInterval(() => {
    if ($("#booknowBtn").length > 0) {
      clearInterval(bookNowInterval);
      document.querySelectorAll("#booknowBtn").forEach(function (booknowBtn) {
        $(booknowBtn).click(function () {
          $("#bookingDetailDiv").fadeOut("700");
          $("#createPitchDiv").fadeIn("700");
        });
      });
      // $("#booknowBtn").each(function () {
      //   $(this).click(function () {
      //     $("#bookingDetailDiv").fadeOut("700");
      //     $("#createPitchDiv").fadeIn("700");
      //   });
      // });

      $(".back-to-bookDetails").click(function () {
        $("#bookingDetailDiv").fadeIn(700);
        $("#createPitchDiv").fadeOut(700);
      });
    }
  }, 400);

  setTimeout(() => {
    $("#bookingTable").DataTable({
      // paging: false,
      searching: false,
      scrollX: true,
      // responsive: true,
      // info: false,
    });

    $("#bookingTable2").DataTable({
      // paging: false,
      searching: false,
      info: false,
      scrollX: true,
      // responsive: true,
    });

    $("#paymentDetailTable").DataTable({
      paging: false,
      searching: false,
      info: false,
      scrollX: true,
    });

    $("#otherBookingTable").DataTable({
      paging: false,
      searching: false,
      info: false,
      scrollX: true,
    });

    $("#slot-date").datepicker({
      autoclose: true,
      format: "M, dd yyyy",
    });

    $("#changeDateTimePicker").datepicker({
      autoclose: true,
      format: "M, dd yyyy",
    });

    $(".user-btn").click(function () {
      $("#exampleModalCenter").modal("toggle");
      $("#bookingDetailDiv").fadeOut(700);
      $("#otherBookingDiv").fadeIn(700);
    });

    $("#backToBookingTab").click(function () {
      $("#bookingDetailDiv").fadeIn(700);
      $("#otherBookingDiv").fadeOut(700);
    });

    $("#changeTimeDateModalBtn").click(function () {});

    $("#bookingDetailRangePicker").daterangepicker({
      opens: "left",
      maxDate: moment(),
      closeOnSelect: true,
    });

    $("#bookingDetail-datepicker")
      .datepicker({
        autoclose: true,
        format: "M, dd yyyy",
        templates: {
          leftArrow: '<i class="fas fa-chevron-left"></i>',
          rightArrow: '<i class="fas fa-chevron-right"></i>',
        },
      })
      .datepicker("setDate", "now");
  }, 800);

  $('a[data-toggle="pill"]').on("shown.bs.tab", function (e) {
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
  });

  let phoneInterval = setInterval(() => {
    let phoneInputField = document.querySelector("#number");
    if (phoneInputField) {
      clearInterval(phoneInterval);
      let phoneInput = window.intlTelInput(phoneInputField, {
        utilsScript: "./assets/js/utils.js",
      });
    }
  }, 400);
});

setTimeout(() => {
  // console.log($(".fc-col-header-cell-cushion").text());
}, 500);
