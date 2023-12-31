import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";

const Headding = styled(Box)`
  padding: 15px 24px;
  background: #878787;
  border-bottom: 1px solid #fff;
`;

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const Balance = ({ cartItems }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0;
    cartItems.map((item) => {
      price += item.price;
    });
    setPrice(price);
  };
  return (
    <Box>
      <Headding>
        <Typography>PRICE DETAILS</Typography>
      </Headding>
      <Header>
        <Typography>Price ({cartItems?.length} item)</Typography>
      </Header>
      <Box>
        <Typography>Total : ₹{price}</Typography>
      </Box>
    </Box>
  );
};

export default Balance;
