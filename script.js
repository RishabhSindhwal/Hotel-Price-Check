// Room data
const rooms = [
  { type: "deluxe", price: 150, name: "Deluxe Sea View", img: "https://source.unsplash.com/300x200/?hotel,room" },
  { type: "suite", price: 300, name: "Ocean Suite", img: "https://source.unsplash.com/301x200/?luxury,hotel" },
  { type: "deluxe", price: 180, name: "Deluxe King", img: "https://source.unsplash.com/302x200/?bedroom,hotel" },
  { type: "suite", price: 400, name: "Presidential Suite", img: "https://source.unsplash.com/303x200/?resort,room" }
];

const container = document.getElementById("roomsContainer");
const filterType = document.getElementById("filterType");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

function renderRooms() {
  const type = filterType.value;
  const maxPrice = parseInt(priceRange.value);
  priceValue.textContent = `$${maxPrice}`;

  container.innerHTML = "";
  rooms
    .filter(r => (type === "all" || r.type === type) && r.price <= maxPrice)
    .forEach(room => {
      const div = document.createElement("div");
      div.className = "room-card";
      div.innerHTML = `
        <img src="${room.img}" alt="${room.name}" style="width:100%; border-radius:8px;" />
        <h3>${room.name}</h3>
        <p>Type: ${room.type}</p>
        <p>Price: $${room.price}/night</p>
      `;
      container.appendChild(div);
    });
}

// Event listeners
filterType.addEventListener("change", renderRooms);
priceRange.addEventListener("input", renderRooms);
window.addEventListener("DOMContentLoaded", renderRooms);




// Booking Form
const bookingForm = document.getElementById("bookingForm");
const formStatus = document.getElementById("formStatus");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;

  if (!name || !email || !checkin || !checkout) {
    formStatus.textContent = "Please fill all fields correctly.";
    formStatus.style.color = "red";
    return;
  }

  formStatus.textContent = `Thank you ${name}, your booking is confirmed!`;
  formStatus.style.color = "green";
  bookingForm.reset();
});
