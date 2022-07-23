$(document).ready(function () {
  let manageProfileInterval = setInterval(() => {
    if ($("#profileCard").length > 0) {
      clearInterval(manageProfileInterval);
      document.querySelectorAll("#profileCard").forEach((btn) => {
        btn.addEventListener("click", function (e) {
          console.log(e.target);
          $(".manageProfilemain-content-wrapper").fadeOut(700);
          setTimeout(() => {
            $(".profileComplete-content-wrapper").fadeIn(700);
          }, 700);
          // if ($(e.target).hasClass("profileCardBtn1")) {
          //   $(".manage-details-img").attr(
          //     "src",
          //     "./assets/img/manageProfile-card1.png"
          //   );
          // } else if ($(e.target).hasClass("profileCardBtn2")) {
          //   $(".manage-details-img").attr(
          //     "src",
          //     "./assets/img/manageProfile2.png"
          //   );
          // }
        });
      });
      // $("#profileCardBtn").click(function () {
      //   $(".manageProfilemain-content-wrapper").fadeOut(700);
      //   setTimeout(() => {
      //     $(".profileComplete-content-wrapper").fadeIn(700);
      //   }, 700);
      // });

      $("#closeManageProfile").click(function () {
        $(".profileComplete-content-wrapper").fadeOut(700);
        setTimeout(() => {
          $(".manageProfilemain-content-wrapper").fadeIn(700);
        }, 700);
      });

      $("#goToEditProfile").click(function () {
        $("#manageProfileMainDiv .top-row").fadeOut(700);

        $(".profileComplete-content-wrapper").fadeOut({
          duration: 700,
          complete: function () {
            $(".editProfile-content-wrapper").fadeIn(700);
            $("#dashboard-sidebar").trigger("show.bs.collapse");
          },
        });
      });

      $("#backToCompleteProfileBtn").click(function () {
        $(".editProfile-content-wrapper").fadeOut({
          duration: 700,
          complete: function () {
            $("#manageProfileMainDiv .top-row").fadeIn(700);
            $(".profileComplete-content-wrapper").fadeIn(700);
          },
        });
      });

      var fileInput = document.getElementById("editPitchProfileFileInput");
      // var uploadLicenseInput = fileInput.querySelector("#uploadLicenseInput");
      var fileNameSpan = $(".editpitchprofile-uploadimg-wrapper .file-name");

      fileInput.addEventListener("change", function (e) {
        let fileName;
        if (this.files[0]) {
          fileName = this.files[0].name;
        }

        if (fileName) {
          $(".stadium-imgbox").prop(
            "src",
            URL.createObjectURL(e.target.files[0])
          );
          fileNameSpan.html(fileName);
        }
      });
    }
  }, 400);
});
