import React, { useState } from "react";
import styled from "styled-components";
import { CohereClient } from "cohere-ai";
import { Divider } from "antd";
import { ColorInput, ColorLabel } from "../../styles/CakeComponentStyles/ColorPicker.styled";
import AI from "../../../assets/cake/CardIcon/AI1.png";
import Hand from "../../../assets/cake/CardIcon/pen1.png";

const CardContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const DividerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .ant-divider {
    border-color: rgba(26, 26, 25, 0.7);
  }
`;

const RadioGroup = styled.div`
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    
    input {
      margin-right: 5px;
      display: none;
      
    }

    img {
      width: 70px;
      height: 50px;
      object-fit: contain;
      border-radius: 15px;
      margin-left: 5px;
      border: 2px solid rgba(217, 217, 217, 0.5);
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.176) inset;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 5px;
  border: 2px solid #c47b83;
  border-radius: 4px;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  
  input {
    flex: 1;
    outline: none;
    border-radius: 15px;
   border: 1px solid rgb(220, 220, 220);
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5);
      &:focus {
        border: 2px solid #e4bcbc;
      }
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: 2px solid #c47b83;
  border-radius: 15px;
  border: 1px solid rgb(220, 220, 220);
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5);
      &:focus {
        border: 2px solid #e4bcbc;
      }
`;

const Button = styled.button`
  background-color: #ffffff;
  color: #141313;
  width: 8.5em;
  height: 3.3em;
  border: rgba(217, 217, 217, 0.5) 0.17em solid;
  border-radius: 15px;
  text-align: center;
  transition: all 0.6s ease;
  //margin-top: 5px;
  font-family: 'Overlock', sans-serif; 
  font-weight: bold;
  box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;

  &:hover {
    //background-color: ${({ theme }) => theme.colors.secondary}; 
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.028) inset;
  }
`;

const OutputContainer = styled.div`
  margin-bottom: 20px;
  max-height: 200px; /* Fixed height */
  overflow-y: auto; /* Enable vertical scrolling */
  
  h3 {
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: bold;
    
  }

  p {
    
    padding: 15px;
    white-space: pre-line;
    font-size: 16px;
    border-radius: 15px;
    border: 1px solid rgb(220, 220, 220);
    box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5);
    color:${({theme})=> theme.colors.primary_dark}  
  }
`;

interface CardWritingProps {
  cardId: string;
  onSaveMessage: (id: string, message: string) => void;
}

const CardWriting: React.FC<CardWritingProps> = ({cardId, onSaveMessage }) => {
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [useAI, setUseAI] = useState<boolean>(false);
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [senderName, setSenderName] = useState<string>("");
  const [recipientName, setRecipientName] = useState<string>("");

  const generateText = async (): Promise<void> => {
    if (!customPrompt.trim() || !senderName.trim() || !recipientName.trim()) {
      setOutput("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const cohere = new CohereClient({
        token: "gODDMIia8nDeSQ5sugZLdDVFRh5iLO2ZxfbkFppe", // Replace with your trial API key
      });

      const response = await cohere.generate({
        model: "command",
        prompt: `Write a short and sweet message for a card. The sender's name is ${senderName} and the recipient's name is ${recipientName}. The message should be based on: ${customPrompt}`,
        maxTokens: 50,
        temperature: 0.8,
        k: 0,
        stopSequences: [],
        returnLikelihoods: "NONE",
      });

      setOutput(
        `From: ${senderName}\nTo: ${recipientName}\n\n` +
        response.generations[0].text.trim()
      );
    } catch (error) {
      console.error("Error generating text:", error);
      setOutput("Failed to generate text.");
    } finally {
      setLoading(false);
    }
  };

  const saveMessage = () => {
    const message = output || customPrompt;
    if (message.trim()) {
      onSaveMessage(cardId, message);
    }
  };
  return (
    <CardContainer>
      <DividerWrapper>
        <Divider>
          <ColorLabel>Card Writing:</ColorLabel>
        </Divider>
      </DividerWrapper>

      <RadioGroup>
        <label>
          <ColorInput
            type="radio"
            name="writingMode"
            value="handwriting"
            checked={!useAI}
            onChange={() => setUseAI(false)}
          />
          <img src={Hand} alt="Handwriting" />
          <span>Hand Writing</span>
        </label>
        <label>
          <ColorInput
            type="radio"
            name="writingMode"
            value="aiWriting"
            checked={useAI}
            onChange={() => setUseAI(true)}
          />
          <img src={AI} alt="AI Writing" />
          <span>AI</span>
        </label>
      </RadioGroup>

      <InputGroup>
        <Input
          type="text"
          placeholder="Sender"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
        />
        <Input
          type="text"
          placeholder=" Recipient"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
        />
      </InputGroup>

      {useAI ? (
        <div>
          <Textarea
            placeholder="Write what you want the AI to include in the card..."
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
          />
          {output && (
            <OutputContainer>
              <h3>Generated Message:</h3>
              <p>{output}</p>
            </OutputContainer>
          )}
          <Button onClick={generateText} disabled={loading}>
            {loading ? "Generating..." : "Generate AI"}
          </Button>
          <Button onClick={saveMessage} style={{ marginLeft: "10px" }}>
            Save Message
          </Button>
        </div>
      ) : (
        <Textarea
          placeholder="Write the message for the card by hand..."
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
        />
      )}

      {!useAI && <Button onClick={saveMessage}>Save Message</Button>}
    </CardContainer>
  );
};

export default CardWriting;
