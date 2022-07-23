$(document).ready(function () {
  $("#settingsDropdownBtn").click(function (e) {
    e.stopPropagation();
    $("#settingsDropdown").slideToggle();
  });

  $("#settingsDropdown .switch").click(function (e) {
    e.stopPropagation();
  });
});

var ogPitchCount = parseInt($("#numofpitch").val());
$("#numofpitch").change(function () {
  let currentPitchCount = parseInt($("#numofpitch").val());
  if (currentPitchCount > 0) {
    updateRows(ogPitchCount, currentPitchCount);
  } else {
    $("#numofpitch").val(ogPitchCount);
  }
  //   updateRows(ogPitchCount, currentPitchCount);
});

function updateRows(ogCount, currentCount) {
  if (ogCount < currentCount) {
    var ctr = currentCount - ogCount;
    for (var i = 1; i <= ctr; i++) {
      var template = `<div class="form-row" id="pitchFormRow${ogCount + i}">
        <div class="form-group col-6 col-lg-2">
          <label for="typeofpitch${ogCount + i}" class="d-inline d-lg-none"
            >Type of pitch</label
          >
          <select
            id="typeofpitch${ogCount + i}"
            class="form-control custom-select"
          >
            <option value="5-a-side">5-a-side</option>
            <option value="6-a-side">6-a-side</option>
            <option value="4-a-side">4-a-side</option>
          </select>
        </div>
        <div class="form-group col-6 col-lg-2">
          <label for="indoor${ogCount + i}" class="d-inline d-lg-none"
            >Indoor/Outdoor</label
          >
          <select
            id="indoor${ogCount + i}"
            class="form-control custom-select"
          >
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>
        <div class="form-group col-6 col-lg-2">
          <label for="groundType${ogCount + i}" class="d-inline d-lg-none"
            >Type of ground</label
          >
          <select
            id="groundType${ogCount + i}"
            class="form-control custom-select"
          >
            <option value="artificial grass">
              artificial grass
            </option>
            <option value="natural grass">natural grass</option>
          </select>
        </div>
        <div class="form-group col-6 col-lg-6">
          <label for="pitchname${ogCount + i}" class="d-inline d-lg-none"
            >Name of pitch</label
          >
          <input
            id="pitchname${ogCount + i}"
            type="text"
            class="form-control"
            placeholder="Wembley_5-a"
          />
        </div>
        </div>`;
      $("#step4 .venue-form-card").append(template);
    }
  } else {
    var ctr = ogCount - currentCount;
    for (var i = ogCount; i > currentCount; i--) {
      $(`#pitchFormRow${i}`).remove();
    }
  }
  ogPitchCount = currentCount;
}

$("#droparea input").change(function (e) {
  let allFiles = e.target.files;
  let allFilesValid = false;
  if (allFiles.length > 0) {
    for (let i = 0; i < allFiles.length; i++) {
      if (allFiles[i].type.startsWith("image/")) {
        allFilesValid = true;
      } else {
        allFilesValid = false;
        alert("Please select only Images");
        return;
      }
    }
    if (allFilesValid === true) {
      for (let i = 0; i < allFiles.length; i++) {
        $("#droparea .thumb-row").append(
          `<img src='${URL.createObjectURL(allFiles[i])}' title='${
            allFiles[i].name
          }' />`
        );
      }
    }
  }
  $("#droparea label").hide();
});

$(".custom-file-input").on("change", function () {
  let fileName = $(this).val().split("\\").pop();
  $(this).next(".custom-file-label").addClass("selected").html(fileName);
});
