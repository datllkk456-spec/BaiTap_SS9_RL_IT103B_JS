Dò vết & Sửa lỗi Truy cập Thuộc tính Động bằng Dot Notation thay vì Bracket
Phân tích lỗi (Error Analysis)
Dòng lệnh sai logic: const basePrice = bookingReservation.priceKey;
Nguyên nhân kỹ thuật: Khi sử dụng Dot Notation (.priceKey), trình thông dịch JavaScript sẽ hiểu rằng bạn đang tìm kiếm một thuộc tính có tên chính xác là chuỗi "priceKey" bên trong đối tượng bookingReservation. Vì thuộc tính này không tồn tại, kết quả trả về là undefined.
Hệ quả nghiệp vụ: Khi basePrice mang giá trị undefined, các phép tính toán học phía sau (basePrice * 0.3 và basePrice + surcharge) sẽ biến thành NaN (Not a Number), làm cho hệ thống hiển thị sai tổng tiền thanh toán của khách.
Cách khắc phục: Cần sử dụng Bracket Notation bookingReservation[priceKey] để JavaScript nội suy giá trị của biến priceKey (chính là "roomPrice") trước khi truy xuất vào đối tượng.
Bảng Test Cases
Trường hợp kiểm thử
Dữ liệu đầu vào
Kết quả sai thực tế (Lỗi)
Kết quả đúng mong đợi
TC01: Nhận phòng sớm (có phụ thu)
priceKey = "roomPrice"<br>checkInHour = 9 (Nhỏ hơn 12)
Phụ thu: NaN<br>Tổng tiền: NaN
Phụ thu: 450000<br>Tổng tiền: 1950000
TC02: Nhận phòng đúng giờ (không phụ thu)
priceKey = "roomPrice"<br>checkInHour = 14 (Lớn hơn 12)
Phụ thu: 0 (vì if không chạy)<br>Tổng tiền: NaN
Phụ thu: 0<br>Tổng tiền: 1500000
