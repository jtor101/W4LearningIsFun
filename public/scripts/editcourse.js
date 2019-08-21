"use strict";

$(function() {
  // Gets courseid from query
  let urlParams = new URLSearchParams(location.search);
  let courseId = urlParams.get("courseid");

  $.getJSON("/api/categories", function(data) {
    let categories = data;

    for (let i = 0; i < categories.length; i++) {
      let catsAll = categories[i];
      let element = document.createElement("option");
      element.text = catsAll.Category;
      element.value = catsAll.Category;
      $("#coursecategory").append(element);
    }
  });

  // Display selected course details in table.
  $.getJSON("/api/courses/" + courseId, function(data) {
    let courses = data;

    $("#courseid").val(courses.CourseId);
    $("#coursetitle").val(courses.Title);
    $("#coursecategory").val(courses.Category);
    $("#courselocation").val(courses.Location);
    $("#coursestartdt").val(courses.StartDate);
    $("#courseenddt").val(courses.EndDate);
    $("#coursemeets").val(courses.Meets);
    $("#coursefee").val(courses.Fee);
  });
  // End $.getJSON

  // Input Validation
  function inputVal() {
    $("form div div").empty();

    if (
      $("#courseid")
        .val()
        .trim() == ""
    ) {
      $("#courseiderror").text("Course ID required");
      return false;
    }
    if (
      $("#coursetitle")
        .val()
        .trim() == ""
    ) {
      $("#coursetitleerror").text("Course Title required");
      return false;
    }
    if (
      $("#courselocation")
        .val()
        .trim() == ""
    ) {
      $("#courselocationerror").text("Course Location required");
      return false;
    }
    if (
      $("#coursestartdt")
        .val()
        .trim() == ""
    ) {
      $("#coursestartdterror").text("Start Date required");
      return false;
    }
    if (
      $("#courseenddt")
        .val()
        .trim() == ""
    ) {
      $("#courseenddterror").text("End Date required");
      return false;
    }
    if (
      $("#coursemeets")
        .val()
        .trim() == ""
    ) {
      $("#coursemeetserror").text("Meeting Time required");
      return false;
    }
    if (
      $("#coursefee")
        .val()
        .trim() == ""
    ) {
      $("#coursefeeerror").text("Course Fee required");
      return false;
    }
  }

  // Submit Button sends form.
  $("#ceSubmitBtn").on("click", sendForm);

  // PUT
  function sendForm() {
    let isOk = inputVal();
    if (isOk == false) {
      return;
    } else {
      $.ajax({
        url: "/api/courses",
        method: "PUT",
        data: $("#courseEdit").serialize(),
        success: function() {
          alert("Updated!");
        }
      });
    }
    //return false;
  }
});
