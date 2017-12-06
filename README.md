# Nhóm 14 - Quản lý ảnh

### Thành viên
- Hoàng Thị Lệ Thu
- Ngô Đình Thành
- Thiều Nguyên Hạ
- Nguyễn Đại Dự
- Phạm Doãn Mỹ
- Lê Bảo Cường

## Khởi tạo moongodb để chạy project thuvienanh
###  Cách tiến hành.
- download theo link dưới đây
  https://drive.google.com/open?id=1caTrlWXIZP1PvEFxrnV1o3gCycEGlIiK
- Lưu ý cách này chỉ thực hiện trên window.
- Sau khi giải nén file moongodb_sharing.rar chúng ta sẽ có hai folder ở trong con trong nó là data và MongoDB. Chúng ta copy hoặc cắt folder data vào ổ C ( link của nó có dạng C:\data\db ), folder còn lại thì nên để vào ổ C:\Program Files hoặc bất kỳ ổ nào cũng được.
- Sau khi hoàn thành chúng ta bắt đầu khởi động server.
Mở cửa sổ cmd ra gõ cd đến folder db và gõ mongod 
- Sau khi khởi động thành công server chúng ta sẽ mở thêm một command prompt mới ( window + r => gõ cmd ) cd đến thư mục thuvienanh và các bạn gõ npm install  để cài đặt các module cần thiết.
- Và bước cuối cùng là chúng ta khởi chạy chương trình. Gõ npm start rồi enter.
Khi chương trình chạy thì ta gõ vào trình duyệt locahost:3000 để vào chương trình.

## Mô tả hệ thống
### 1. Admin  (đã đăng nhập)
- quản lý người dùng: xóa tài khoản người dùng trên hệ thống
- quản lý ảnh: Xóa ảnh, xóa album của tất cả người dùng 
### 2. Người xem: (không cần đăng nhập)
- xem ảnh (kích thước nhỏ)
- tải ảnh (kích thước nhỏ)
- tìm kiếm (theo tên album)
- đăng kí làm thành viên hệ thống
### 3. Thành viên (đã đăng nhập)
- xem ảnh (kích thước gốc)
- tải ảnh xuống (kích thước gốc)
- tải ảnh lên 
- xóa ảnh đã đăng
- tạo chú thích cho ảnh
- tìm kiếm (theo tên album)
- comment ( bình luận về ảnh)
