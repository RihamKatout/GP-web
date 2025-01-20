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
    data: productDto,
  } = useQuery(
    ["product", id],
    () => ProductService.getProductById(Number(id)),
    {
      enabled: !!id,
      cacheTime: 0,
    }
  );

  //TODO: fix
  if (!productDto) return <div>Product not found</div>;

  return (
    <MainLayout>
      <SectionContainer sectionId={SectionIdEnum.product}>
        {productDto ? (
          <>
            <ProductSection productDto={productDto}></ProductSection>
            <SimilarSection></SimilarSection>
          </>
        ) : (
          <div>Product not found</div>
        )}
      </SectionContainer>
    </MainLayout>
  );
};
