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

  // Submit Button sends form.
  $("#ceSubmitBtn").on("click", sendForm);

  // PUT
  function sendForm() {
    $.ajax({
      url: "/api/courses",
      method: "PUT",
      data: $("#courseEdit").serialize(),
      success: function(){alert("Updated!");
    }
    });
    //return false;
  }
});
