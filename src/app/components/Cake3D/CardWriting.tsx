import React, { useState } from 'react';
import axios from 'axios';

const CardWriting = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [fontStyle, setFontStyle] = useState('Arial');




  // Handle AI message generation
  const generateMessage = async () => {
    setLoading(true);
  
    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
      if (!apiKey) {
        setMessage('API key is missing. Please check your configuration.');
        setLoading(false);
        return;
      }
  
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', // Ensure correct model
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: `Write a heartfelt birthday message. The user's input is: ${message}` },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
  
      setMessage(response.data.choices[0].message.content.trim());
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 429) {
        setTimeout(generateMessage, 1000); // Retry after 1 second
      } else {
        console.error('Error generating message:', error);
        setMessage('Failed to generate message. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };
  
  // Handle font style change
  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFontStyle(event.target.value);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h3>Write Your Card</h3>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message here"
        rows={5}
        cols={40}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={generateMessage}
          disabled={loading}
          style={{ padding: '10px 20px', marginRight: '10px' }}
        >
          {loading ? 'Generating...' : 'Generate AI Message'}
        </button>
        <select
          onChange={handleFontChange}
          value={fontStyle}
          style={{ padding: '10px' }}
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          fontFamily: fontStyle,
          background: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h4>Card Preview</h4>
        <p>{message || 'Your message will appear here.'}</p>
      </div>
    </div>
  );
};

export default CardWriting;
