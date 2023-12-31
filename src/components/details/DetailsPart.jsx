import { useState } from "react";
import { Button, Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const DetailsPart = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { id } = product;

  console.log(id);

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  return (
    <Box>
      <Box>{product.brand}</Box>
      <Box>{product.price}</Box>
      <Box>{product.rating}</Box>
      <Box>{product.stock}</Box>
      <Box>
        <Button
          variant="contained"
          style={{ background: "#fb6413" }}
          onClick={() => addItemToCart()}
        >
          Add to Cart
        </Button>
      </Box>
      <Box>
        <Button variant="contained" style={{ background: "#fb6413" }}>
          {<FavoriteBorderIcon />}
        </Button>
      </Box>
    </Box>
  );
};

export default DetailsPart;
