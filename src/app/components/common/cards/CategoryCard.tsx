import React from "react";
import { CardActionArea, CardContent } from "@mui/material";
import {
  CategoryCardTitle,
  StyledCategoryCard,
  StyledCategoryCardMedia,
} from "../../../styles";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

type CategoryCardProps = {
  id: number;
  title: string;
  imageurl?: string;
  type?: "STORE" | "PRODUCT";
  onClick: () => void;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageurl,
  id,
  type,
  onClick,
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "0.2rem",
        width: type === "PRODUCT" ? "4rem" : "auto"
      }}
    >
      <StyledCategoryCard
        type={type || "STORE"}
        imageurl={imageurl}
        ref={cardRef}
        onClick={onClick}
      >
        <CardActionArea
          style={{ height: "100%", backgroundColor: "transparent" }}
        >
          {type === "STORE" && imageurl && (
            <StyledCategoryCardMedia image={imageurl} />
          )}
          {(type === "STORE" || type === undefined) && (
            <CardContent>
              <CategoryCardTitle>{title}</CategoryCardTitle>
            </CardContent>
          )}
        </CardActionArea>
      </StyledCategoryCard>
      {type === "PRODUCT" && (
        <p style={{ color: "black", fontWeight: "bold", fontSize: "0.8rem"}}>{title}</p>
      )}
    </div>
  );
};
