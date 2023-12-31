import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";

import { styled, Box, Typography, Grid } from "@mui/material";
import FigurePart from "./FigurePart";
import DetailsPart from "./DetailsPart";

const container = styled(Box)`
  display: flex;
  justify-content: space-evenly;
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);
  console.log(product);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [id]);
  return (
    <Box>
      {product && Object.keys(product).length && (
        <container>
          <Box> {<FigurePart product={product} />}</Box>
          <Box>{<DetailsPart product={product} />}</Box>
        </container>
      )}
    </Box>
  );
};

export default DetailView;
