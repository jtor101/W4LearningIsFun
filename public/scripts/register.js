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
  backBtn.html(
    // This dynamic html triggers an error that I did not have time to figure out.  Apologies.
    "<a class='btn btn-warning py-2' href='details.html?courseid=" +
      courseId +
      "'>Back To Class Details</a>"
  );

  // Submit Button sends form.
  submitBtn.on("click", sendForm);

  // Posts to Students table.
  function sendForm() {
    alert("Sent!");
    $.post("api/register", courseReg.serialize());
    return false;
  }
});
