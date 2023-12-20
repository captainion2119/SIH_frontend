import React, { useState, useRef, useEffect } from 'react';
import { List, ListItem, TextField, Button, IconButton } from '@mui/material';
import { Chat as ChatIcon, Close as CloseIcon } from '@mui/icons-material';
const ChatbotIcon = () => {
    return (
      <div>
        <img
          src="C:\Users\pranamya\SIH_frontend\src\assets\bot.webp"
          alt="Chatbot Icon"
          style={{ width: '50px', height: '50px' }} // Adjust the size as needed
        />
      </div>
    );
  };
const Bo = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatboxOpen, setChatboxOpen] = useState(false);
  const chatboxRef = useRef(null);

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendChat = async () => {
    if (!userMessage.trim()) return;

    // Save user message to chat history
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { message: userMessage, type: 'user' },
    ]);

    // Send user message to API and get bot response
    try {
      const response = await fetch('http://', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        const botResponse = data.text;

        // Save bot response to chat history
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { message: botResponse, type: 'bot' },
        ]);

        // Scroll to the bottom when new messages are added
        if (chatboxRef.current) {
          chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
      } else {
        throw new Error('Failed to fetch bot response');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    // Clear user input
    setUserMessage('');
  };

  const toggleChatbox = () => {
    setChatboxOpen(!isChatboxOpen);
  };

  useEffect(() => {
    // Scroll to the bottom when the chatbox is opened
    if (isChatboxOpen && chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [isChatboxOpen]);

  return (
    <>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <IconButton onClick={toggleChatbox}>
          {isChatboxOpen ? <CloseIcon /> : (<ChatbotIcon/>)}
        </IconButton>
        {isChatboxOpen && (
          <div ref={chatboxRef} style={{ maxWidth: '400px', maxHeight: '350px', overflowY: 'scroll', margin: 'auto', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
            <List>
              {chatHistory.map((chat, index) => (
                <ListItem key={index} style={{ textAlign: chat.type === 'user' ? 'right' : 'left' }}>
                  <div style={{ padding: '8px', backgroundColor: chat.type === 'user' ? '#4CAF50' : '#fff', color: chat.type === 'user' ? '#fff' : '#333', borderRadius: '8px' }}>
                    {chat.message}
                  </div>
                </ListItem>
              ))}
            </List>
            <div>
              <div style={{ display: 'flex', marginTop: '16px', position:'sticky' , bottom:0}}>
                <TextField
                  placeholder="Enter a message..."
                  variant="outlined"
                  value={userMessage}
                  onChange={handleInputChange}
                  fullWidth
                  style={{ marginRight: '8px' }}
                />
                <Button variant="contained" color="primary" onClick={handleSendChat}>
                  Send
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Bo;
