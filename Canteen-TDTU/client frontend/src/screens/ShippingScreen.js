import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { saveShippingAddress } from "../Redux/Actions/cartActions";

const ShippingScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [buyOption, setBuyOption] = useState("Lấy tại chỗ");



  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address,  buyOption  }));
    history.push("/payment");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>CHỌN CĂN TIN</h6>
          <div className="radio-container1">
            <input
              type="radio"
              value={buyOption}
              checked
              onChange={(e) => setBuyOption(e.target.value)}
            />
            <label className="form-check-label">Lấy tại chỗ</label>
          </div>
          <select
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="col-12 bg-light p-3 mt-2 border-0 rounded"
          >
            <option value="Tòa F">Tòa F</option>
            <option value="Tòa 10D">Tòa 10D</option>
            <option value="Kí túc xá">Kí túc xá</option>
          </select>


          <button type="submit">Tiếp tục</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
