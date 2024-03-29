"use strict";

$(function() {
  // Gets courseid from query string.
  let urlParams = new URLSearchParams(location.search);
  let courseId = urlParams.get("courseid");

  // Course ID Input (readonly)
  let courseIdInput = $("#courseid");

  // loads Course ID into input.
  courseIdInput.val(courseId);

  // loads Course ID into Back to Class Details input.
  $("#backBtn").attr("href", "details.html?courseid=" + courseId);

  // Submit Button sends form.
  $("#submitBtn").on("click", sendForm);

  function inputVal() {
    $("form div").empty();

    if (
      $("#studentName")
        .val()
        .trim() == ""
    ) {
      $("#studentNameError").text("Student Name required");
      return false;
    }
    if (
      $("#studentEmail")
        .val()
        .trim() == ""
    ) {
      $("#studentEmailError").text("Student Email required");
      return false;
    }
  }

  // Posts to Students table.
  function sendForm() {
    let isOk = inputVal();
    if (isOk == false) {
      return;
    }
    alert("Registered!");
    $.post("api/register", $("#courseReg").serialize());
    window.location.replace("details.html?courseid=" + courseId);
    return false;
  }
});
