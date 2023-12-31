import { useState } from "react";
import { Box, Button, ButtonGroup, styled } from "@mui/material";

const GroupButton = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <Box>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={() => handleDecrement()} disabled={counter == 0}>
          -
        </Button>
        <Button disabled>{counter}</Button>
        <Button onClick={() => handleIncrement()}>+</Button>
      </ButtonGroup>
    </Box>
  );
};

export default GroupButton;
