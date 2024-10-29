const cardItems = document.querySelectorAll(".card-hover");
const cardLabel = document.querySelectorAll(".name-overlay");

cardItems.forEach((card, index) => {
  card.addEventListener("mouseenter", function () {
    card.classList.add("hovered");
    cardLabel[index].style.display = "block";
  });

  card.addEventListener("mouseleave", function () {
    card.classList.remove("hovered");
    cardLabel[index].style.display = "none";
  });
});
