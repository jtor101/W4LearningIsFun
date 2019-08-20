"use strict";

$(function() {
  // Gets courseid from query string.
  let urlParams = new URLSearchParams(location.search);
  let courseId = urlParams.get("courseid");

  // Course ID Input (readonly)
  let courseIdInput = $("#courseid");

  // Back to Class Details.
  let backBtn = $("#backBtn");

  // Register button.
  let submitBtn = $("#submitBtn");

  // Registration Form ID
  let courseReg = $("#courseReg");

  // loads Course ID into input.
  courseIdInput.val(courseId);

  // loads Course ID into Back to Class Details input.
  backBtn.attr("href", "details.html?courseid=" + courseId);

  // Submit Button sends form.
  submitBtn.on("click", sendForm);

  // Posts to Students table.
  function sendForm() {
    alert("Registered!");
    $.post("api/register", courseReg.serialize());
    window.location.replace("details.html?courseid=" + courseId);
    return false;
  }
});
