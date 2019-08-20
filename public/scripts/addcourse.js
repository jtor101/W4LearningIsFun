"use strict";

$(function() {
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

  // Submit Button sends form.
  $("#caSubmitBtn").on("click", sendForm);

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

  // Posts to Students table.
  function sendForm() {
    $("#errors").empty();
    let isOk = inputVal();
    if (isOk == false) {
      return;
    } else {
      alert("Sent!");
      $.post("api/courses", $("#courseAdd").serialize());
      window.location.href = "courses.html"
      return false;
    }
  }
});
