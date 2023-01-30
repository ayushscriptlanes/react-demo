import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/home");
  };

  return (
    <>
      <button onClick={onClickHandler}>Go To Home</button>
    </>
  );
};

export default Cart;