"use strict";

$(function() {
  // Gets courseid from query string.
  let urlParams = new URLSearchParams(location.search);
  let courseId = urlParams.get("courseid");
  let studentName = urlParams.get("StudentName");
  let studentEmail = urlParams.get("Email");

  // Course ID Input (readonly)
  let courseIdInput = $("#courseid");
  let studentNameInput = $("#studentName");
  let studentEmailInput = $("#studentEmail");

  // loads all into input.
  courseIdInput.val(courseId);
  studentNameInput.val(studentName);
  studentEmailInput.val(studentEmail);

  // loads Course ID into Back to Class Details input.
  $("#backBtn").attr("href", "details.html?courseid=" + courseId);

  // Submit Button sends form.
  $("#submitBtn").on("click", sendForm);

  // Posts to Students table.
  function sendForm() {
    alert("Unregistered!");
    $.post("api/unregister", $("#courseUnreg").serialize());
    window.location.replace("details.html?courseid=" + courseId);
    return false;
  }
});
