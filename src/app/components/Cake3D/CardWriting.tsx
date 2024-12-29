import React, { useState } from "react";
import styled from "styled-components";
import { CohereClient } from "cohere-ai";
import { Divider } from "antd";
import { ColorInput, ColorLabel } from "../../styles/CakeComponentStyles/ColorPicker.styled";
//import { CakeButton } from "../../styles/CakeComponentStyles/Cake.styled";
import AI from "../../../assets/cake/CardIcon/ai.png";
import Hand from "../../../assets/cake/CardIcon/hand.png";

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
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;

  label {
    margin-right: 10px;
    font-size: 16px;

    input {
      margin-right: 5px;
    }
    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
      border-radius: 5px;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border: 2px solid #C47B83;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 1px;
  border: 2px solid #C47B83;
  border-radius: 4px;
`;

 const Button = styled.button`
  background-color: #ffffff;
  color: #141313;
  width: 8.5em;
  height: 3.3em;
  border: #C47B83 0.17em solid;
  border-radius: 11px;
  text-align: center;
  transition: all 0.6s ease;
  margin-top: 5px;

  &:hover {
    //background-color: ${({theme}) => theme.colors.secondary};
    transform: scale(1.05);
    cursor: pointer;
  }
// `;

const OutputContainer = styled.div`
  margin-top: 20px;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold; 
  }

  p {
    border: 1px solid #ccc;
    padding: 10px;
    white-space: pre-line;
    font-size: 16px;
  }
`;
interface CardWritingProps {
  onSaveMessage: (message: string) => void; // Callback to save the message
}
const CardWriting: React.FC<CardWritingProps> = ({ onSaveMessage }) =>{
  const [output, setOutput] = useState<string>(""); // Stores the AI-generated message
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [useAI, setUseAI] = useState<boolean>(false); // Toggle between handwriting and AI writing

  const [customPrompt, setCustomPrompt] = useState<string>(""); // Custom input for AI
  const [senderName, setSenderName] = useState<string>(""); // Sender's name
  const [recipientName, setRecipientName] = useState<string>(""); // Recipient's name

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

      setOutput(response.generations[0].text.trim());
    } catch (error) {
      console.error("Error generating text:", error);
      setOutput("Failed to generate text.");
    } finally {
      setLoading(false);
    }
  };

  const saveMessage = () => {
    const message = output || customPrompt; // Use AI output or handwritten message
    if (message.trim()) {
      onSaveMessage(message);
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
        <label
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
          }}>
          <ColorInput
            type="radio"
            name="writingMode"
            value="handwriting"
            checked={!useAI}
            onChange={() => setUseAI(false)}
            style={{ display: 'none' }}
          />
          
          <div
                style={{
                  width: '50px',
                  height: '50px',
                  
                  display : 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '15px',
                  
                  border: !useAI ? '2px solid #C47B83' : '1px solid #ccc',
                }}
              >
              <img
                src={Hand}
                //alt={filling.name}
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain',
                  marginBottom: '10px',
                  borderRadius: '5px',
                }}
              />
              </div>
            
          <span style={{  fontSize: '15px' }}>Hand Writing</span>
        </label>
        <label
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
          }}>
          <ColorInput
            type="radio"
            name="writingMode"
            value="aiWriting"
            checked={useAI}
            onChange={() => setUseAI(true)}
            style={{ display: 'none' }}
          />
          
          <div 
            
                style={{
                  width: '50px',
                  height: '50px',
                  //backgroundColor: useAI ? '#C47B83' : '#ccc',
                  display : 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '15px',
                  
                  border: useAI ? '2px solid #C47B83' : '1px solid #ccc',
                }}
                  >
                  <img
                src={AI}
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain',
                  borderRadius: '5px',
                  marginBottom: '10px',

                }}
              />
                  </div>
              
            
          <span style={{  fontSize: '15px' }}>AI</span>
        </label>
      </RadioGroup>

      <div>
        <Input
          type="text"
          placeholder="Your name (Sender)"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Recipient's name"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
        />
      </div>

      {useAI ? (
        <div>
          <Textarea
            placeholder="Write what you want the AI to include in the card..."
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            rows={5}
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
          <Button onClick={saveMessage}>Save Message</Button>
        </div>
      ) : (
        <Textarea
          placeholder="Write the message for the card by hand..."
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          rows={5}
        />
      )}
     <div style={{ alignItems: 'center'}}>
      
        {!useAI && <Button onClick={saveMessage}>Save Message</Button>}
      
      </div>
    </CardContainer>
  );
};

export default CardWriting;