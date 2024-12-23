import React from "react";
import { CardActionArea, CardContent } from "@mui/material";
import {
  CategoryCardTitle,
  StyledCardMedia,
  StyledCategoryCard,
} from "../../styles";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

type CategoryCardProps = {
  id: number;
  title: string;
  imageURL?: string;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageURL,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);
  const navigate = useNavigate();
  return (
    <StyledCategoryCard
      ref={cardRef}
      onClick={() => navigate("/product?storeCategoryId=" + id)}
    >
      <CardActionArea style={{ height: "100%" }}>
        {imageURL && <StyledCardMedia image={imageURL} />}
        <CardContent>
          <CategoryCardTitle>{title}</CategoryCardTitle>
        </CardContent>
      </CardActionArea>
    </StyledCategoryCard>
  );
};
