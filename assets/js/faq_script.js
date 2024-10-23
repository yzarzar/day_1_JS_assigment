function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const toggleIcon = element.querySelector(".toggle");

  if (answer.classList.contains("show")) {
    answer.classList.remove("show");
    toggleIcon.textContent = "+";
  } else {
    answer.classList.add("show");
    toggleIcon.textContent = "-";
  }
}
