import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography, Container, styled } from "@mui/material";
import { Loader } from "../components/common";
import { ProductService } from "../api";

// TODO : fix
const ProductImage = styled("img")({
  width: "50%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "8px",
});

const ProductDetails = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  "& > *": {
    marginBottom: theme.spacing(2),
  },
}));

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: product,
    isLoading,
    error,
  } = useQuery(
    ["product", id],
    () => ProductService.fetchProductById(Number(id)),
    {
      enabled: !!id,
    }
  );

  if (isLoading) return <Loader type="bouncing" />;
  if (error) return <div>Error loading product</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ProductImage
            src={product.imageURL || "/placeholder.jpg"}
            alt={product.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductDetails>
            <Typography variant="h4" component="h1">
              {product.name}{" "}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {product.description || "No description available."}
            </Typography>
            <Typography variant="h5" color="primary">
              ${product.price.toFixed(2)}
            </Typography>
            <Typography
              variant="body1"
              color={product.isAvailable ? "success.main" : "error.main"}
            >
              {product.isAvailable ? "In Stock" : "Out of Stock"}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Rating: {product.rating || "No rating yet"}
            </Typography>
          </ProductDetails>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
