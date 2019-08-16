"use strict";

$(function() {
  // Populates dropdown
  let categorySelector = $("#categorySelector");

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

  categorySelector.on("change", function() {

  $.getJSON("/api/courses/bycategory/" + $("#categorySelector").val(), function(data) {
    let courses = data;
      let tableBody = $("#courseTable");
      tableBody.empty();

      for (let i = 0; i < courses.length; i++) {
          let courseId = courses[i].CourseId;
          let courseTitle = courses[i].Title;
          let courseLoc = courses[i].Location;

          let markup =
            "<tr><td>" +
            courseId +
            "</td><td>" +
            courseTitle +
            "</td><td>" +
            courseLoc +
            "</td><td>" +
            "<a href='details.html?courseid=" +
            courseId +
            "'>Details</a></td></tr>";

          tableBody.append(markup);
      }
      
    });
  });
});
