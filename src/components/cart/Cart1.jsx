import { Typography, Grid, Box, styled, Button } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Balance from "./Balance";

const Container = styled(Grid)`
  padding: 30px 135px;
`;

const Header = styled(Box)`
  padding: 15px 24px;
`;

const Cart1 = () => {
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);

  return (
    <>
      {cartItems.length ? (
        <Container container>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography> My cart({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <Box>
              <Button variant="contained">Place Order</Button>
            </Box>
          </Grid>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Balance cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <div>Empty</div>
      )}
    </>
  );
};

export default Cart1;
