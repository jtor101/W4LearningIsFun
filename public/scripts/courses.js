"use strict";

$(function() {
  // Radio Buttons
  let categoryRB = $("#byCategory");
  let showAllRB = $("#showAll");
  // Dropdown
  let categorySelector = $("#categorySelector");
  // Table
  let tableBody = $("#courseTable");

  // Sets dropdown to hidden on load
  categorySelector.css("visibility", "hidden");

  // Turns on dropdown when "Search By Category" is selected
  categoryRB.on("change", function() {
    categorySelector.css("visibility", "visible");
    tableBody.empty(); // Clears table of previous selection.
    catFillTable();
  });

  // Turns off dropdown when "Show All Classes" is selected
  showAllRB.on("change", function() {
    categorySelector.css("visibility", "hidden");

    tableBody.empty(); // Clears table of previous selection.

    // Populates table with all courses.
    $.getJSON("/api/courses", function(data) {
      let courses = data;
      for (let i = 0; i < courses.length; i++) {
        let courseId = courses[i].CourseId;
        let courseTitle = courses[i].Title;
        let courseLoc = courses[i].Location;

        let markup =
          "<tr><td>" +
          courseId +
          "</td><td class='font-italic'>" +
          courseTitle +
          "</td><td>" +
          courseLoc +
          "</td><td>" +
          "<a class='btn btn-success' href='details.html?courseid=" +
          courseId +
          "'>Details</a></td></tr>";

        tableBody.append(markup);
      }
    });
  });

  // Populates dropdown with categories.
  $.getJSON("/api/categories", function(data) {
    let categories = data;

    for (let i = 0; i < categories.length; i++) {
      let catsAll = categories[i];
      let element = document.createElement("option");
      element.text = catsAll.Category;
      element.value = catsAll.Value;
      categorySelector.append(element);
    }
  });

  // Populates table with courses that match selection on Change.
  categorySelector.on("change", catFillTable);

  function catFillTable() {
    $.getJSON(
      "/api/courses/bycategory/" + $("#categorySelector").val(),
      function(data) {
        let courses = data;
        tableBody.empty(); // Clears table of previous selection.

        // Loops through for matching courses.
        for (let i = 0; i < courses.length; i++) {
          let courseId = courses[i].CourseId;
          let courseTitle = courses[i].Title;
          let courseLoc = courses[i].Location;

          // Populates table with results.
          let markup =
            "<tr><td>" +
            courseId +
            "</td><td class='font-italic'>" +
            courseTitle +
            "</td><td>" +
            courseLoc +
            "</td><td>" +
            "<a class='btn btn-success' href='details.html?courseid=" +
            courseId +
            "'>Details</a></td></tr>";

          tableBody.append(markup);
        }
      }
    );
  }
});
