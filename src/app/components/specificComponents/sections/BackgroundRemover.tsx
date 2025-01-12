import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const FileInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: linear-gradient(45deg,rgb(249, 174, 179),rgb(184, 207, 253));
  /* color: white; */
  border: 1px solid rgb(252, 210, 247);
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.6s ease;

  transform: translateY(20px) perspective(1000px);
  transform-style: preserve-3d;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResultContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const ResultImage = styled.img`
  max-width: 90%;
  border: 2px solid #ddd;
  border-radius: 10px;
`;

const BackgroundRemover: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const apiKey = 'HYdzGZeLNatLZkYQ7jn7HgnD';

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const removeBackground = async (blob: File) => {
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', blob);

    try {
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': apiKey,
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
      console.error('Error removing background:', error);
      alert('Failed to remove background. Please try again.');
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      alert('Please select a file!');
      return;
    }
    await removeBackground(file);
  };

  return (
    <Container>
      <Title>Background Remover</Title>
      <Form onSubmit={handleSubmit}>
        <FileInput type="file" accept="image/*" onChange={handleFileChange} />
        <SubmitButton type="submit">Remove Background</SubmitButton>
      </Form>

      {result && (
        <ResultContainer>
          <h2>Result:</h2>
          <ResultImage src={result} alt="Background removed" />
        </ResultContainer>
      )}
    </Container>
  );
};

export default BackgroundRemover;
