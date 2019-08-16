"use strict";

$(function() {
  let urlParams = new URLSearchParams(location.search);
  let courseId = urlParams.get("courseid");
  // Course Details Table
  let courseTable = $("#courseTable");
  // Student Details Table
  let studentTable = $("#studentTable");
  // Register button
  let regBtn = $("#regBtn");

  // Display selected course details in table.
  $.getJSON("/api/courses/" + courseId, function(data) {
    let courses = data;

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
      "</td><td class='font-italic'>" +
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

    // Displays Name and Email of any registered students in table.
    for (let i = 0; i < courses.Students.length; i++) {
      let studentName = courses.Students[i].StudentName;
      let studentEmail = courses.Students[i].Email;
      let studentMarkup =
        "<tr><td>" + studentName + "</td><td>" + studentEmail + "</td></tr>";
      studentTable.append(studentMarkup);
    }

    // Brings user to Registration page with Course ID prefilled.
    regBtn.html(
      "<a class='btn btn-success py-2' href='register.html?courseid=" +
        courseId +
        "'>Register</a>"
    );
  });
});
