import React from 'react'
import ChatBot from 'react-simple-chatbot'



export default function Chatbot() {
  return (
    <div>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Xin chào, Bạn đang cần hỗ trợ?',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 1, label: 'Cách đặt đồ ăn', trigger: '3' },
              { value: 2, label: 'Thông tin liên hệ', trigger: '5' },
              { value: 3, label: 'Calo trong phở, bún bò, hủ tiếu', trigger: '6' },
              { value: 4, label: 'Calo trong cơm tấm và cơm gà', trigger: '7' },
              { value: 5, label: 'Calo trong nước ngọt', trigger: '9' },
            ],
          },
          {
            id: '3',
            message: 'Bước 1: Bạn hãy chọn vào đồ ăn/đồ uống mà bạn cần mua. \nBước 2: Thêm vào giỏ hàng. \nBước 3: Điền đầy đủ thông tin. Bước 4: Thanh toán',
            trigger: '4',
          },
          {
            id: '4',
            message: 'Bạn cần gì thêm nữa không?',
            trigger: '2',
          },
          {
            id: '5',
            message: "Mọi thắc mắc gửi Email về địa chỉ cantintdtu@tdtu.edu.vn hoặc vui lòng liên hệ SĐT: 028 3775 5052",
            trigger: '2',
          },
          {
            id: '6',
            message: 'Một tô bún bò trung bình có thể chứa khoảng 430-480 calo',
            trigger: '11',
          },
          {
            id: '11',
            message: 'Một tô bún bò trung bình có thể chứa khoảng 300-500 calo',
            trigger: '12',
          },
          {
            id: '12',
            message: 'Một tô hủ tiếu Nam Vang trung bình có thể chứa khoảng 400-600 calo',
            trigger: '4',
          },

          {
            id: '7',
            message: 'Đối với một phần cơm tấm thông thường (khoảng 200g), có thể tính trung bình là khoảng 200-250 calo, tùy thuộc vào cách nấu và các thành phần đi kèm.',
            trigger: '8',
          },
          {
            id: '8',
            message: 'Và một phần cơm gà trung bình có thể chứa khoảng 300-400 calo, nhưng có thể thay đổi tùy theo cách chế biến và các thành phần thêm vào.',
            trigger: '4',
          },
          {
            id: '9',
            message: 'Đa số nước ngọt thường có mức calo cao do đường thêm vào. Một lon (355ml) nước ngọt thông thường có thể chứa khoảng 140-180 calo.',
            trigger: '10',
          },
          {
            id: '10',
            message: 'Tuy nhiên, cũng có các loại nước ngọt không có calo. Các loại nước ngọt không calo thường không chứa calo từ đường, vì vậy chúng có thể không chứa hoặc chỉ chứa một lượng nhỏ calo.',
            trigger: '4',
          },


        ]}
        floating={true}
      />
    </div>
  )
}
