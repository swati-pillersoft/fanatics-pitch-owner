$("#stadium-datepicker")
  .datepicker({
    autoclose: true,
    format: "M, dd yyyy",
    templates: {
      leftArrow: '<i class="fas fa-chevron-left"></i>',
      rightArrow: '<i class="fas fa-chevron-right"></i>',
    },
  })
  .datepicker("setDate", "now");

// $('a[href="#v-pills-bookingDetail"]').on("shown.bs.tab", function (e) {
//   $("#bookingDetailDiv").fadeIn(700);
//   $("#createPitchDiv").fadeOut(700);
// });

// $('a[href="#v-pills-profile"]').on("shown.bs.tab", function (e) {
//   $(".manageProfilemain-content-wrapper").fadeIn(700);
//   $(".profileComplete-content-wrapper").fadeOut(700);
//   $(".editProfile-content-wrapper").fadeOut(700);
// });

$("#settingsDropdownBtn").click(function (e) {
  e.stopPropagation();
  $("#settingsDropdown").slideToggle();
});

$("#settingsDropdown .switch").click(function (e) {
  e.stopPropagation();
});

const dailyBookCtx = document.getElementById("dailyBookChart").getContext("2d");

const dailyBookChart = new Chart(dailyBookCtx, {
  type: "bar",
  data: {
    labels: [
      "01 Apr",
      "02 Apr",
      "04 Apr",
      "07 Apr",
      "10 Apr",
      "13 Apr",
      "14 Apr",
      "15 Apr",
      "16 Apr",
      "17 Apr",
      "18 Apr",
      "19 Apr",
      "20 Apr",
      "21 Apr",
      "22 Apr",
      "25 Apr",
      "28 Apr",
    ],
    datasets: [
      {
        label: "Daily Booking",

        data: [
          500, 380, 200, 400, 120, 450, 900, 950, 270, 1200, 1390, 300, 500,
          600, 200, 1000, 600,
        ],
        backgroundColor: "#173A72",
        borderRadius: 20,
        borderSkipped: false,
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "April 2022",
            fontSize: 20,
          },
          gridLines: {
            drawOnChartArea: false,
            // display: false,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            drawOnChartArea: false,
            // display: false,
          },
        },
      ],
    },
  },
});

const hourlyBookingCtx = document
  .getElementById("hourlyBookingChart")
  .getContext("2d");

const hourlyBookingChart = new Chart(hourlyBookingCtx, {
  type: "line",
  data: {
    labels: [
      "6-7",
      "7-8",
      "8-9",
      "9-10",
      "10-11",
      "11-12",
      "12-13",
      "12-14",
      "14-15",
      "15-16",
      "16-17",
      "17-18",
      "18-19",
      "19-20",
      "20-21",
      "21-22",
      "22-23",
    ],
    datasets: [
      {
        label: "Mon",
        backgroundColor: "#173A72",
        // borderDash: [5],
        lineTension: 0.6,
        borderColor: "#173A72",
        fill: false,
        backgroundColor: "#E8F0F1",
        data: [
          100, 150, 380, 400, 350, 320, 310, 400, 410, 600, 700, 580, 500, 420,
          300, 400, 680,
        ],
        lineTension: 0.3,
        pointRadius: 1,
      },
      {
        label: "Tue",
        backgroundColor: "#CC5252",
        // borderDash: [5],
        lineTension: 0.6,
        borderColor: "#CC5252",
        fill: false,
        data: [
          200, 250, 340, 450, 550, 220, 380, 490, 510, 200, 800, 580, 410, 620,
          700, 450, 380,
        ],
        lineTension: 0.3,
        pointRadius: 1,
      },
      {
        label: "Wed",
        backgroundColor: "#FDCE0D",
        // borderDash: [5],
        lineTension: 0.6,
        borderColor: "#FDCE0D",
        fill: false,
        data: [
          800, 750, 540, 450, 350, 420, 580, 690, 710, 800, 600, 780, 810, 320,
          400, 550, 380,
        ],
        lineTension: 0.3,
        pointRadius: 1,
      },
    ],
  },
  options: {
    responsive: true,

    legend: {
      display: true,
      position: "bottom",
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Hours of Day",
          },
          gridLines: {
            // display: false,
            drawOnChartArea: false,
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            // display: false,

            drawOnChartArea: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Total Booking Per Day",
          },
        },
      ],
    },
  },
});

//utilization chart
// const utilizationCtx = document
//   .getElementById("utilizationChart")
//   .getContext("2d");

// const utilizationChart = new Chart(utilizationCtx, {
//   type: "bar",
//   data: {
//     labels: [
//       "01 Apr",
//       "02 Apr",
//       "04 Apr",
//       "07 Apr",
//       "10 Apr",
//       "13 Apr",
//       "14 Apr",
//       "15 Apr",
//       "16 Apr",
//       "17 Apr",
//       "18 Apr",
//       "19 Apr",
//       "20 Apr",
//       "21 Apr",
//       "22 Apr",
//       "25 Apr",
//       "28 Apr",
//     ],
//     datasets: [
//       {
//         label: "Daily Booking",
//         data: [
//           500, 380, 200, 400, 120, 450, 900, 950, 270, 1200, 1390, 300, 500,
//           600, 200, 1000, 600,
//         ],
//         backgroundColor: "#173A72",
//       },
//     ],
//   },
//   options: {
//     legend: {
//       display: false,
//     },
//     scales: {
//       xAxes: [
//         {
//           display: true,
//           scaleLabel: {
//             display: true,
//             labelString: "April 2022",
//             fontSize: 20,
//           },
//           gridLines: {
//             drawOnChartArea: false,
//             // display: false,
//           },
//         },
//       ],
//       yAxes: [
//         {
//           display: true,
//           gridLines: {
//             drawOnChartArea: false,
//             // display: false,
//           },
//         },
//       ],
//     },
//   },
// });

var utilizationChartCtx = document
  .getElementById("utilizationChart")
  .getContext("2d");
const utilizationChart = new Chart(utilizationChartCtx, {
  type: "line",
  data: {
    labels: [
      "01 Apr",
      "04 Apr",
      "07 Apr",
      "10 Apr",
      "13 Apr",
      "16 Apr",
      "19 Apr",
      "22 Apr",
      "25 Apr",
      "28 Apr",
    ],
    datasets: [
      {
        label: "Revenue",
        yAxisID: "A",
        backgroundColor: "#51ADB5",
        borderColor: "#16386E",
        pointBackgroundColor: "#16386E",
        data: [
          10, 5, 15, 25, 30, 5, 15, 8, 10, 35, 20, 15, 35, 10, 35, 0, 25, 20,
          15, 20, 15, 25, 10, 15, 50, 30, 35, 5, 10, 10,
        ],
        fill: false,
        lineTension: 0,
      },
    ],
  },
  options: {
    legend: {
      display: false,
      position: "bottom",
      align: "middle",
    },
    // responsive: false
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "Date",
          },
          gridLines: {
            drawOnChartArea: false,
          },
          gridLines: {
            // zeroLineWidth: 1,
            // zeroLineColor: "#2C292E",
          },
          position: "center",
        },
      ],
      yAxes: [
        {
          id: "A",
          type: "linear",
          // position: "left",
          display: true,
          scaleLabel: {
            display: true,
            //   labelString: "RNS",
          },
          gridLines: {
            drawOnChartArea: false,
          },
        },
        // {
        //   id: "B",
        //   type: "linear",
        //   //position: "right",
        //   display: true,
        //   scaleLabel: {
        //     display: true,
        //     //labelString: "Revenue",
        //   },
        //   gridLines: {
        //     drawOnChartArea: false,
        //   },
        //   ticks: {
        //     beginAtZero: true,
        //     max: 1,
        //     min: 0,
        //   },
        // },
      ],
    },
  },
});

//booking cancellation rates
// const bookingCancelCtx = document
//   .getElementById("bookingCancelChart")
//   .getContext("2d");
// const bookingCancelChart = new Chart(bookingCancelCtx, {
//   type: "pie",
//   data: {
//     labels: ["Not Cancelled", "Cancelled"],
//     datasets: [
//       {
//         label: ["Not Cancelled", "Cancelled"],
//         data: [80, 20],
//         backgroundColor: ["#173A72", "#FDCE0D"],
//       },
//       // {
//       //   label: ["Cancelled"],
//       //   data: [20],
//       //   backgroundColor: ["#FDCE0D"],
//       // },
//     ],
//   },
//   options: {
//     tooltips: {
//       enabled: true,
//       mode: "single",
//       callbacks: {
//         label: function (tooltipItems, data) {
//           console.log(tooltipItems);
//           console.log(data);
//           var i = tooltipItems.datasetIndex;
//           console.log(i);
//           return (
//             data.datasets[i].label[0] + ": " + data.datasets[i].data[0] + "%"
//           );
//           // return (
//           //   data.datasets[i].labels[0] + ": " + data.datasets[i].data[0] + "%"
//           // );
//         },
//       },
//     },
//     // events: false,
//     animation: {
//       duration: 500,
//       easing: "easeOutQuart",
//       maintainAspectRatio: false,
//       responsive: true,
//       onComplete: function () {
//         var ctx = this.chart.ctx;
//         ctx.font = Chart.helpers.fontString(
//           Chart.defaults.global.defaultFontFamily,
//           "normal",
//           Chart.defaults.global.defaultFontFamily
//         );
//         ctx.textAlign = "center";
//         ctx.textBaseline = "bottom";

//         this.data.datasets.forEach(function (dataset) {
//           for (var i = 0; i < dataset.data.length; i++) {
//             var model =
//                 dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
//               total = dataset._meta[Object.keys(dataset._meta)[0]].total,
//               mid_radius =
//                 model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
//               start_angle = model.startAngle,
//               end_angle = model.endAngle,
//               mid_angle = start_angle + (end_angle - start_angle) / 2;

//             var x = mid_radius * Math.cos(mid_angle);
//             var y = mid_radius * Math.sin(mid_angle);

//             ctx.fillStyle = "#fff";
//             if (i == 3) {
//               // Darker text color for lighter background
//               ctx.fillStyle = "#444";
//             }

//             var val = dataset.data[i];
//             var percent = val + "%";

//             if (val != 0) {
//               ctx.fillText(percent, model.x + x, model.y + y + 15);
//             }
//           }
//         });
//       },
//     },
//   },
// });

// Dashboard sidebar animation

var chartData = [
  { visitor: 39, visit: 1 },
  { visitor: 18, visit: 2 },
  { visitor: 9, visit: 3 },
  { visitor: 5, visit: 4 },
  { visitor: 6, visit: 5 },
  { visitor: 5, visit: 6 },
  { visitor: 98, visit: 6 },
];

var visitorData = [],
  sum = 0,
  visitData = [];

for (var i = 0; i < chartData.length; i++) {
  visitorData.push(chartData[i]["visitor"]);
  visitData.push(chartData[i]["visit"]);

  sum += chartData[i]["visitor"];
}

var textInside = "Total Bookings: 80%";

var bookingCancelChart = new Chart(
  document.getElementById("bookingCancelChart"),
  {
    plugins: [
      {
        beforeDraw: function (chart) {
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
          ctx.restore();
          var fontSize = 14;
          ctx.font = "bold " + fontSize + "px sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#16386E";
          var text = chart.config.options.elements.center.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      },
    ],
    type: "doughnut",
    animation: {
      animateScale: true,
    },
    data: {
      labels: ["Cancelled, Not Cancelled"],
      datasets: [
        {
          labels: ["Cancelled, Not Cancelled"],
          data: [20, 80],
          backgroundColor: ["#FDCE0D", "#16386E"],
        },
      ],
    },
    options: {
      cutoutPercentage: 70,
      elements: {
        center: {
          text: textInside,
        },
      },
      responsive: true,
      legend: false,
      legendCallback: function (chart) {
        var legendHtml = [];
        legendHtml.push("<ul>");
        var item = chart.data.datasets[0];
        for (var i = 0; i < item.data.length; i++) {
          legendHtml.push("<li>");
          legendHtml.push(
            '<span class="chart-legend" style="background-color:' +
              item.backgroundColor[i] +
              '"></span>'
          );
          legendHtml.push(
            '<span class="chart-legend-label-text">' +
              item.data[i] +
              " person - " +
              chart.data.labels[i] +
              " times</span>"
          );
          legendHtml.push("</li>");
        }

        legendHtml.push("</ul>");
        return legendHtml.join("");
      },
      tooltips: {
        enabled: true,
        mode: "label",
        callbacks: {
          label: function (tooltipItem, data) {
            var indice = tooltipItem.index;
            console.log(tooltipItem);
            console.log(data);
            return (
              data.labels[0].split(",")[indice] +
              ": " +
              data.datasets[0].data[indice] +
              "%"
            );
          },
        },
      },
    },
  }
);

// $("#my-legend-con").html(bookingCancelChart.generateLegend());

// console.log(document.getElementById("my-legend-con"));

// end

var timetableCalendar;
let clickedStadium;
let stadiumResourceId;
let currentStadiumEvents;
let allEvents = [
  {
    resourceId: "a",
    title: "Booked",
    start: moment("2022-06-19 00:00:00").toDate(),
    end: moment("2022-06-19 01:00:00").toDate(),
    display: "block",
    backgroundColor: "#C84347",
    borderColor: "#C84347",
    textColor: "#ffffff",
  },
  {
    resourceId: "a",
    title: "Available",
    start: moment("2022-06-19 01:00:00").toDate(),
    end: moment("2022-06-19 07:00:00").toDate(),
    display: "block",
    backgroundColor: "#CCD8EC",
    borderColor: "#CCD8EC",
    textColor: "#000000",
    extendedProps: {
      available: true,
    },
  },
  {
    resourceId: "b",
    title: "Booked",
    start: moment("2022-06-20 04:00:00").toDate(),
    end: moment("2022-06-20 05:00:00").toDate(),
    display: "block",
    backgroundColor: "#C84347",
    borderColor: "#C84347",
    textColor: "#ffffff",
  },
  {
    resourceId: "b",
    title: "Available",
    start: moment("2022-06-21 00:00:00").toDate(),
    end: moment("2022-06-21 03:00:00").toDate(),
    display: "block",
    backgroundColor: "#CCD8EC",
    borderColor: "#CCD8EC",
    textColor: "#000000",
    extendedProps: {
      available: true,
    },
  },
  {
    resourceId: "c",
    title: "Booked",
    start: moment("2022-06-22 00:00:00").toDate(),
    end: moment("2022-06-22 02:00:00").toDate(),
    display: "block",
    backgroundColor: "#C84347",
    borderColor: "#C84347",
    textColor: "#ffffff",
  },
  {
    resourceId: "c",
    title: "Available",
    start: moment("2022-06-22 03:00:00").toDate(),
    end: moment("2022-06-22 07:00:00").toDate(),
    display: "block",
    backgroundColor: "#CCD8EC",
    borderColor: "#CCD8EC",
    textColor: "#000000",
    extendedProps: {
      available: true,
    },
  },
  {
    resourceId: "d",
    title: "Booked",
    start: moment("2022-06-25 05:00:00").toDate(),
    end: moment("2022-06-25 06:00:00").toDate(),
    display: "block",
    backgroundColor: "#C84347",
    borderColor: "#C84347",
    textColor: "#ffffff",
  },
  {
    resourceId: "d",
    title: "Available",
    start: moment("2022-06-25 00:00:00").toDate(),
    end: moment("2022-06-25 04:00:00").toDate(),
    display: "block",
    backgroundColor: "#CCD8EC",
    borderColor: "#CCD8EC",
    textColor: "#000000",
    extendedProps: {
      available: true,
    },
  },
  {
    resourceId: "b",
    title: "Booked",
    start: moment("2022-06-24 03:00:00").toDate(),
    end: moment("2022-06-24 04:00:00").toDate(),
    display: "block",
    backgroundColor: "#C84347",
    borderColor: "#C84347",
    textColor: "#ffffff",
  },
  {
    resourceId: "e",
    title: "Booked",
    start: moment("2022-06-20 09:00:00").toDate(),
    end: moment("2022-06-20 10:00:00").toDate(),
    display: "block",
    backgroundColor: "#C84347",
    borderColor: "#C84347",
    textColor: "#ffffff",
  },
  {
    resourceId: "e",
    title: "Booked",
    start: moment("2022-06-22 10:00:00").toDate(),
    end: moment("2022-06-22 15:00:00").toDate(),
    display: "block",
    backgroundColor: "#C84347",
    borderColor: "#C84347",
    textColor: "#ffffff",
  },
  {
    resourceId: "a",
    title: "Booked",
    start: moment("2022-06-23 14:00:00").toDate(),
    end: moment("2022-06-23 16:00:00").toDate(),
    display: "block",
    backgroundColor: "#C84347",
    borderColor: "#C84347",
    textColor: "#ffffff",
  },
  {
    resourceId: "b",
    title: "Booked",
    start: moment("2022-06-23 14:00:00").toDate(),
    end: moment("2022-06-23 16:00:00").toDate(),
    display: "block",
    backgroundColor: "#C84347",
    borderColor: "#C84347",
    textColor: "#ffffff",
  },
  {
    resourceId: "a",
    title: "Booked",
    start: moment("2022-06-23 00:00:00").toDate(),
    end: moment("2022-06-23 02:00:00").toDate(),
    display: "block",
    backgroundColor: "#C84347",
    borderColor: "#C84347",
    textColor: "#ffffff",
  },
  {
    resourceId: "e",
    title: "Booked",
    start: moment("2022-06-25 11:00:00").toDate(),
    end: moment("2022-06-25 14:00:00").toDate(),
    display: "block",
    backgroundColor: "#C84347",
    borderColor: "#C84347",
    textColor: "#ffffff",
  },
  {
    resourceId: "f",
    title: "Available",
    start: moment("2022-06-20 11:00:00").toDate(),
    end: moment("2022-06-20 17:00:00").toDate(),
    display: "block",
    backgroundColor: "#CCD8EC",
    borderColor: "#CCD8EC",
    textColor: "#000000",
    extendedProps: {
      available: true,
    },
  },
  {
    resourceId: "f",
    title: "Available",
    start: moment("2022-06-24 07:00:00").toDate(),
    end: moment("2022-06-24 12:00:00").toDate(),
    display: "block",
    backgroundColor: "#CCD8EC",
    borderColor: "#CCD8EC",
    textColor: "#000000",
    extendedProps: {
      available: true,
    },
  },
  {
    resourceId: "e",
    title: "Booked",
    start: moment("2022-06-23 08:00:00").toDate(),
    end: moment("2022-06-23 10:00:00").toDate(),
    display: "block",
    backgroundColor: "#C84347",
    borderColor: "#C84347",
    textColor: "#ffffff",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("timetableCalendar");
  timetableCalendar = new FullCalendar.Calendar(calendarEl, {
    // initialView: "timeGridWeek",
    initialView: "resourceTimeGridDay",
    resources: [
      { id: "a", title: "Wembley Stadium" },
      { id: "b", title: "The Den" },
      { id: "c", title: "Emirates Stadium" },
      { id: "d", title: "London Stadium" },
      { id: "e", title: "Wembley Stadium" },
      { id: "f", title: "The Den" },
    ],
    headerToolbar: {
      left: "resourceTimeGridDay",
      center: "title",
      right: "prev,next",
      // right: "availableLegend,bookedLegend",
    },
    expandRows: true,
    displayEventTime: false,
    slotDuration: "01:00:00",
    slotLabelFormat: {
      hour: "numeric",
      minute: "2-digit",
      omitZeroMinute: false,
      meridiem: "short",
    },
    viewDidMount: function (view) {
      let viewName = view.view.type;
      $(".fc-toolbar-title").html(view.view.title);
      view.el.querySelector(".fc-timegrid-axis-frame").innerHTML =
        "<span id='timetableDatepicker'>Date</span>";
      $("#timetableDatepicker")
        .datepicker({
          autoclose: true,
          format: "M, dd yyyy",
          templates: {
            leftArrow: '<i class="fas fa-chevron-left"></i>',
            rightArrow: '<i class="fas fa-chevron-right"></i>',
          },
        })
        .datepicker("setDate", "now")
        .on("changeDate", function (e) {
          let date = e.date;
          timetableCalendar.gotoDate(date);
        });

      console.log(viewName);
      $(".fc-resource").click(function (e) {
        stadiumResourceId = $(this).data("resource-id");
        clickedStadium = e.target.innerText;
        timetableCalendar.changeView("timeGridWeek");
        $(".fc-toolbar-title").html(clickedStadium);
        var clickedResource =
          timetableCalendar.getResourceById(stadiumResourceId);
        console.log("clickedResource:", clickedResource);
        currentStadiumEvents = clickedResource.getEvents();
        console.log("currentStadiumEvents:", currentStadiumEvents);
        var allCurrentEvents = timetableCalendar.getEvents();
        allCurrentEvents.forEach((event) => {
          event.remove();
        });
        currentStadiumEvents.forEach((event) => {
          timetableCalendar.addEvent(event);
        });
        console.log("stadium specific events loaded");
      });
    },
    datesSet: function (dateInfo) {
      if (dateInfo.view.type === "timeGridWeek") {
        console.log("stadiumResourceId:", stadiumResourceId);
      } else {
        $(".fc-toolbar-title").html(dateInfo.view.title);
        var allCurrentEvents = timetableCalendar.getEvents();
        allCurrentEvents.forEach((event) => {
          event.remove();
        });
        allEvents.forEach((event) => {
          timetableCalendar.addEvent(event);
        });
        console.log("allEvents:", allEvents);
        console.log("All global events loaded");
      }
    },
    eventContent: function ({ event }) {
      return {
        html: `<div class='bookingDetailCalendarEvent ${
          event.extendedProps.available ? "text-center" : ""
        }'>${event.title} ${
          event.extendedProps.available
            ? `<div><button id="triggerCreatePostPitch" onclick='openCreatePostPitch()' class='btn btn-light calendarAddPostBtn'>add post pitch</button></div>`
            : ""
        }</div>`,
      };
    },
    customButtons: {
      availableLegend: {
        text: "Available",
      },
      bookedLegend: {
        text: "Booked",
      },
    },
    views: {
      resourceTimeGridDay: {
        buttonText: "Stadium View",
        // buttonIcons: "chevron-left",
      },
      timeGridWeek: {
        buttonText: "Today",
        // name of view
        titleFormat: { month: "long", year: "numeric" },
        allDayContent: (text) => {
          return "Date";
        },
        dayHeaderContent: (args) => {
          return {
            html: `<p class="header-day">${moment(args.date).format(
              "ddd"
            )}</p><p class="header-date">${moment(args.date).format(
              "D MMMM"
            )}</p>`,
          };
        },
        // other view-specific options here
      },
    },
    events: allEvents,
  });
  timetableCalendar.render();

  setTimeout(() => {
    $("#btn-toggle-calendar").click(function () {
      $("#btn-toggle-table").removeClass("active");
      $(this).addClass("active");
      $(".main-content-table").hide();
      $(".main-content-calendar").show();
      timetableCalendar.updateSize();
    });

    $("#btn-toggle-table").click(function () {
      $("#btn-toggle-calendar").removeClass("active");
      $(this).addClass("active");
      $(".main-content-table").show();
      $(".main-content-calendar").hide();
    });
  }, 800);
});

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
        complete: function () {
          timetableCalendar.updateSize();
        },
      },
      600
    );
    setTimeout(() => {
      timetableCalendar.updateSize();
    }, 750);
  });

  $("#dashboard-sidebar").on("hide.bs.collapse", function (e) {
    e.preventDefault();
    $(this).toggleClass("show");
    $("body").removeClass("sidebar-active");
    $(this).animate(
      {
        width: 0,
        complete: function () {
          console.log(timetableCalendar);
          console.log("hi");
          // console.log('size update');
        },
      },
      600
    );
    setTimeout(() => {
      timetableCalendar.updateSize();
    }, 750);
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
