import { Typography, Box, styled, ButtonGroup, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import GroupButton from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";

const Border = styled(Box)`
  border: 1px solid black;
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Box>
      <Border>
        <img src={item.thumbnail} alt="image" style={{ width: 100 }} />
        <GroupButton />
        <Button onClick={() => removeItemFromCart(item.id)} variant="text">
          Remove
        </Button>
        <Typography>{`₹:${item.price}`}</Typography>
        <Typography>{item.description}</Typography>
      </Border>
    </Box>
  );
};

export default CartItem;
