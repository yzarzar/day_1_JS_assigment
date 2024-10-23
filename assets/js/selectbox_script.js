function updateImage() {
  const select = document.getElementById("imageSelect");
  const image = document.getElementById("selectedImage");

  // Set the image source based on the selected option
  switch (select.value) {
    case "image1":
      image.src = "../assets/images/apple.png";
      break;
    case "image2":
      image.src = "../assets/images/background_img.jpg";
      break;
    case "image3":
      image.src = "../assets/images/bg_img.jpg";
      break;
    default:
      image.src = "";
      image.style.display = "none";
      return;
  }

  image.style.display = "block";
}
