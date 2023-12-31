import { Box, Button, styled } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MainContainerBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  height: 1362;
  width: 966;
`;

const ContainerBox = styled(Box)`
  border: 1px solid black;
  background: #f5f5dc;
  border-radius: 2%;
  margin: 15px;
`;

const BuyBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  margin: 5;
`;

const Image = styled("img")({
  width: 200,
  height: 100,
});

const CardItem = () => {
  const { products } = useSelector((state) => state.getProducts);
  const ApiData = products.products;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // console.log(products);
  // console.log(ApiData);
  return (
    <MainContainerBox>
      {ApiData &&
        ApiData.map((data) => (
          <ContainerBox key={data.id}>
            <Link to={`product/${data.id}`}>
              <Box>
                <Button variant="contained">10% OFF</Button>
              </Box>
              <Box>
                <Image src={data.thumbnail} alt="image" />
              </Box>
              <Box>
                <Button variant="outlined">S</Button>
                <Button variant="outlined">M</Button>
                <Button variant="outlined">L</Button>
                <Button variant="outlined">XL</Button>
              </Box>
              <BuyBox>
                <Box>
                  <Button variant="contained">Buy</Button>
                </Box>
                <Box>
                  <FavoriteIcon />
                </Box>
              </BuyBox>
            </Link>
          </ContainerBox>
        ))}
    </MainContainerBox>
  );
};

export default CardItem;
