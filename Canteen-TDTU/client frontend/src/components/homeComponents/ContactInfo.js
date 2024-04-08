import React from "react";


const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="intro">
        <h1>GIỚI THIỆU</h1>
        <p>Hiện nay, chúng ta thường đi ăn căn tin ở trường nhưng không biết thực đơn hôm nay sẽ có món gì và
        chúng ta sẽ phải ra căn tin để xem món. Khi đến căn tin, chúng ta sẽ phải xếp hàng dài để mua phiếu ăn.
         Điều đó sẽ hơi bất tiện, vì vậy chúng tôi sẽ ra mắt một trang web dành cho các 
          bạn sinh viên trong trường có thể đặt đồ ăn và thanh toán online. Sau khi thanh toán xong, chúng tôi sẽ cung cấp
          cho bạn mã QRCode để lấy đồ ăn thay vì mua phiếu. Bạn chỉ cần mang đến quầy quét mã và lấy đồ ăn.</p>
          <img src="https://lib.tdtu.edu.vn/sites/tdt_lib/files/uploads/Photo/Spaces/can-tin-3.jpg" alt="img" />
          <h1>3 lý do nên sử dụng web</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            {/* <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div> */}
            <h5>Không cần xếp hàng để thanh toán</h5>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            {/* <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div> */}
            <h5>Tiết kiệm thời gian</h5>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            {/* <div className="info-image">
              <i className="fas fa-fax"></i>
            </div> */}
            <h5>Nhanh chóng, tiện lợi</h5>
          </div>
        </div>
      </div>
    </div>
/* <div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={"https://www.tdtu.edu.vn/sites/www/files/articles/2023/Apr/TC-DGTS/canten.png"}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={"https://www.tdtu.edu.vn/sites/www/files/articles/2023/Apr/TC-DGTS/canten.png"}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={"https://idgroup.vn/wp-content/uploads/2016/03/30-2.jpg"}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div> */
  );
};

export default ContactInfo;
