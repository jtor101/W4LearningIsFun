"use strict";

$(function() {
  let urlParams = new URLSearchParams(location.search);
  let courseId = urlParams.get("courseid");
  let courseTable = $("#courseTable");

  $.getJSON("/api/courses/" + courseId, function(data) {
    let courses = data;

    // display selected products from category.

        let classId = courses.CourseId;
        let classTitle = courses.Title;
        let classCat = courses.Category;
        let classLoc = courses.Location;
        let classStart = courses.StartDate;
        let classEnd = courses.EndDate;
        let classMeets = courses.Meets;
        let classFee = courses.Fee;

        let markup =
        "<tr><td>" +
        classId +
        "</td><td>" +
        classTitle +
        "</td><td>" +
        classCat +
        "</td><td>" +
        classLoc +
        "</td><td>" +
        classStart +
        "</td><td>" +
        classEnd +
        "</td><td>" + 
        classMeets + 
        "</td><td>" + 
        classFee +
        "</td></tr>";

      courseTable.append(markup);
      
    })
  });
