import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin-top: 15px;
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
  margin-top: 20px;
  text-align: center;
`;

const ResultImage = styled.img`
  max-width: 60%;
  border: 2px solid #ddd;
  border-radius: 10px;
`;

interface BackgroundRemoverProps {
  imageFile: File | null;
}

const BackgroundRemover: React.FC<BackgroundRemoverProps> = ({ imageFile }) => {
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
      <h5>Background Remover</h5>
      {imageFile && !result && (
        <Button onClick={removeBackground} disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Remove Background"}
        </Button>
      )}
      {result && (
        <ResultContainer>
          <h6>Result:</h6>
          <ResultImage src={result} alt="Background removed" />
        </ResultContainer>
      )}
    </Container>
  );
};

export default BackgroundRemover;
