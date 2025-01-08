import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ProductService } from "../../api";
import { MainLayout, SectionContainer } from "../../components/Layout";
import { SectionIdEnum } from "../../types";
import styled from "styled-components";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect } from "react";
import { ProductSection } from "../../features";

const SimilarSection = styled.section``;

export const ProductDetailsPage = () => {
  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
      onSuccess: (data) => {},
    }
  );

  //TODO: fix
  if (!product) return <div>Product not found</div>;

  console.log(product);
  return (
    <MainLayout>
      <SectionContainer sectionId={SectionIdEnum.product}>
        <ProductSection product={product}></ProductSection>
        <SimilarSection></SimilarSection>
      </SectionContainer>
    </MainLayout>
  );
};
