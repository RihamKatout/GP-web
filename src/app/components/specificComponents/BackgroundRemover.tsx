import React, { useState } from "react";
import styled from "styled-components";

interface BackgroundRemoverProps {
  imageFile: File | null;
  setWithoutBackground: (image: File | null) => void;
}

export const BackgroundRemover: React.FC<BackgroundRemoverProps> = ({
  imageFile,
  setWithoutBackground,
}) => {
  const [result, setResult] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const apiKey = "HYdzGZeLNatLZkYQ7jn7HgnD";

  const removeBackground = async () => {
    if (!imageFile) return;

    setIsProcessing(true);

    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", imageFile);

    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": apiKey,
        },
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const fileName = imageFile.name.replace(/\.[^/.]+$/, "") + "_no_bg.png";
        const resultFile = new File([blob], fileName, { type: "image/png" });
        setWithoutBackground(resultFile);

        const url = URL.createObjectURL(blob);
        setResult(url);
      } else {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error removing background:", error);
      alert("Failed to remove background. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Container>
      {imageFile && !result && (
        <Button onClick={removeBackground} disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Remove Background"}
        </Button>
      )}
      {result && (
        <ResultContainer>
          <ResultImage src={result} alt="Background removed" />
          <Button onClick={() => {
            setResult(null);
            setWithoutBackground(null);
          }} style={{backgroundColor: "red"}}>Delete</Button>
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = result;
              link.download = "background-removed.png";
              link.click();
            }}
          >
            Download
          </Button>
        </ResultContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 15px;
  height: fit-content;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ResultContainer = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const ResultImage = styled.img`
  max-width: 150px;
  border: 2px solid #ddd;
  border-radius: 0.5rem;
`;
