var ogScreenWidth = $(window).width();

$(document).ready(function () {
  $("#dashboard-sidebar").on("show.bs.collapse", function () {
    if ($(window).width() <= 1200) {
      $("body").addClass("sidebar-active");
    } else {
      $("body").removeClass("sidebar-active");
    }
    $(this).animate(
      {
        width: 220,
      },
      600
    );
  });

  $("#dashboard-sidebar").on("hide.bs.collapse", function (e) {
    e.preventDefault();
    $(this).toggleClass("show");
    $("body").removeClass("sidebar-active");
    $(this).animate(
      {
        width: 0,
      },
      600
    );
  });

  if ($(window).width() >= 1200) {
    $("#dashboard-sidebar").trigger("show.bs.collapse");
  } else {
    $("#dashboard-sidebar").trigger("hide.bs.collapse");
  }

  $(".dashboard-sidebar-overlay").click(function () {
    $("#dashboard-sidebar").trigger("hide.bs.collapse");
  });
});

function sidebarMobileResized() {
  if ($(window).width() != ogScreenWidth) {
    console.log($(window).width());
    if ($(window).width() < 1200) {
      $("body").addClass("sidebar-active");
      $("#dashboard-sidebar").trigger("show.bs.collapse");
    } else {
      $("body").removeClass("sidebar-active");
    }
  }
}

$(window).resize(sidebarMobileResized);

$(".setting-profile-photo input").change(function (e) {
  let file = e.target.files[0];
  if (file) {
    let newImgUrl = URL.createObjectURL(file);
    $("#userUploadedImg").attr("src", newImgUrl);
  }
});

document.querySelectorAll(".toggle-password").forEach(function (togglePwd) {
  togglePwd.addEventListener("click", function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
    $(this).prev().attr("type", type);
  });
});
