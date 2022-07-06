$(document).ready(function () {
  let detailMatchInterval = setInterval(() => {
    let matchWidgetDetailBtns = document.querySelectorAll(
      ".btn-outline-matchwidget"
    );
    console.log(matchWidgetDetailBtns);
    if (matchWidgetDetailBtns.length > 0) {
      console.log("working");
      clearInterval(detailMatchInterval);
      matchWidgetDetailBtns.forEach((btn) => {
        $(btn).click(function () {
          $(".matchWidget-wrapper").fadeOut({
            duration: 600,
            complete: function () {
              $(".matchWidget-details-wrapper").fadeIn(600);
            },
          });
        });
      });
      $("#backToMatchWidget").click(function () {
        $(".matchWidget-details-wrapper").fadeOut({
          duration: 600,
          complete: function () {
            $(".matchWidget-wrapper").fadeIn(600);
          },
        });
      });
    }
  }, 400);
});
