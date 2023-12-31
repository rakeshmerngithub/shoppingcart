import { useState, useEffect } from "react";
import { Box, InputBase, styled, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

const Search = styled(Box)`
  background: white;
  width: 20%;
  border-radius: 2px;
`;

const StyledInputBase = styled(InputBase)`
  padding-left: 10px;
  width: 100%;
`;

const Listwrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: black;
  margin-top: 35px;
`;

function Searchbar() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);
  const NewData = products.products;

  console.log(NewData);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  return (
    <Search>
      <StyledInputBase
        placeholder="search"
        onChange={(e) => getText(e.target.value)}
      />
      <Listwrapper>
        {NewData?.filter((product) =>
          product.brand.toLowerCase().includes(text.toLowerCase())
        ).map((product) => (
          <ListItem>
            <Link
              to={`/product/${product.id}`}
              onClick={() => setText("")}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {product.brand}
            </Link>
          </ListItem>
        ))}
      </Listwrapper>
    </Search>
  );
}

export default Searchbar;
