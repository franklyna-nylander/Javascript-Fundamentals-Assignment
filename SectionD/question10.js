//Nested Objects, Arrays and Template Literal Formatting
let hotelRoom = {
  location: "Aberdeen",
  pricePerNight: 100,
  guestName: "Mariama Bah",
  night: 3,
  amenities: ["Wi-Fi", "Ac", "Ocean", "View", "Breakfast"],
  bathroom: { count: 10, hasJacuzzi: true },
};

// Calculate total bill
let totalBill = hotelRoom.pricePerNight * hotelRoom.night;

console.log(`Amenities: ${hotelRoom.amenities}`);
console.log("****************************\n");

console.log(`Jacuzzi Availability: ${hotelRoom.bathroom.hasJacuzzi}\n`);

console.log("****************************");
console.log("Booking Summary card");
console.log("****************************");
console.log(`Guest Name: ${hotelRoom.guestName}`);
console.log(`Location: ${hotelRoom.location}`);
console.log(`Number of Nights: ${hotelRoom.night}`);
console.log(`Total Bill: $${totalBill}`);
