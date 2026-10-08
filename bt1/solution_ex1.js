      
const bookingReservation = {
  bookingId: "BK-2024-8891",
  guestName: "Trần Minh Quang",
  roomType: "Deluxe Ocean View",
  roomPrice: 1500000,
  checkInHour: 9,
};

const priceKey = "roomPrice";

// Sửa lỗi: Sử dụng Bracket Notation để truy xuất thuộc tính động qua biến
const basePrice = bookingReservation[priceKey];

let surcharge = 0;

// Tính phụ thu nếu nhận phòng trước 12h
if (bookingReservation.checkInHour < 12) {
  surcharge = basePrice * 0.3;
  bookingReservation.surcharge = surcharge;
} else {
  // Gán mặc định bằng 0 để đảm bảo object luôn có trường surcharge
  bookingReservation.surcharge = 0;
}

const totalAmount = basePrice + surcharge;
bookingReservation.totalAmount = totalAmount;

console.log("Mã đặt phòng:", bookingReservation.bookingId);
console.log("Khách hàng:", bookingReservation.guestName);
console.log("Phụ thu nhận phòng sớm:", bookingReservation.surcharge);
console.log("Tổng số tiền thanh toán:", bookingReservation.totalAmount);