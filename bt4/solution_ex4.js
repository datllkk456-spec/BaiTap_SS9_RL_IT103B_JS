const hotelRoomProfile = {
  roomId: "P205",
  guestName: "Huỳnh Quốc Huy", // Tên khách hàng
  roomType: "Premium Suite",
  pricePerNight: 2500000,
  "check-in-status": "Completed", // Key có chứa dấu gạch ngang (kí tự đặc biệt)
  "24h-service": true, // Key bắt đầu bằng chữ số
};

console.log("--- MINH HỌA 1: TRUY CẬP QUA BIẾN ĐỘNG ---");
const dynamicKey = "pricePerNight";
// Sai: hotelRoomProfile.dynamicKey => sẽ tìm key tên là "dynamicKey" -> undefined
// Đúng:
console.log(
  `Giá phòng (Truy cập bằng Bracket): ${hotelRoomProfile[dynamicKey]} VNĐ`,
);

console.log("\n--- MINH HỌA 2: KEY CÓ KÝ TỰ ĐẶC BIỆT / GẠCH NGANG ---");
// Sai: console.log(hotelRoomProfile.check-in-status); => Báo lỗi SyntaxError (trừ nhầm)
// Sai: console.log(hotelRoomProfile.24h-service); => Báo lỗi SyntaxError
// Đúng:
console.log(`Trạng thái Check-in: ${hotelRoomProfile["check-in-status"]}`);
console.log(`Dịch vụ 24h: ${hotelRoomProfile["24h-service"] ? "Có" : "Không"}`);

console.log("\n--- MINH HỌA 3: DUYỆT THUỘC TÍNH BẰNG VÒNG LẶP FOR...IN ---");
// Trong vòng lặp for...in, biến 'key' là một chuỗi (string) chứa tên thuộc tính.
// BẮT BUỘC phải dùng Bracket Notation để nội suy giá trị của biến 'key'.
console.log("Chi tiết toàn bộ hồ sơ phòng:");
for (const key in hotelRoomProfile) {
  // Sai: hotelRoomProfile.key => Sẽ in ra undefined
  // Đúng: hotelRoomProfile[key]
  console.log(` - ${key}: ${hotelRoomProfile[key]}`);
}