import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import GoogleGenerativeAI from generative AI package

// Styled components from your Home component
const MainContainer = styled.div`
  background: url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63770.jpg?w=996&t=st=1718421442~exp=1718422042~hmac=9a5d1b70a340399d3df30d01b8d60367471d8d1782256faea3c55baf79b3fff1');
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh; /* Full height of the viewport */
  margin: 0; /* Remove margin to avoid shifting */
`;

const ChatContainer = styled.div`
  width: 70%; /* Adjust width as needed */
  max-width: 800px;
  margin-top: 2rem;
`;

const ChatBox = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 1rem;
  min-height: 300px; /* Adjust minimum height as needed */
  overflow-y: scroll; /* Enable vertical scrolling */
`;

const ChatMessage = styled.div`
  background-color: #4caf50; /* Green color for user messages */
  color: white;
  border-radius: 0.8rem;
  padding: 0.8rem;
  margin-bottom: 1rem;
  margin-left:auto;
  max-width: 70%; /* Limit message width */
`;

const ResponseMessage = styled.div`
  background-color: #007bff; /* Blue color for response messages */
  color: white;
  border-radius: 0.8rem;
  padding: 0.8rem;
  margin-bottom: 1rem;
  align-self: flex-start; /* Align received messages to the left */
  max-width: 70%; /* Limit message width */
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.8rem;
`;

const ChatButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  margin-left: 1rem;
`;

const GenIt = () => {
  const [messages, setMessages] = useState([]);
  const chatBoxRef = useRef(null); // Ref for accessing chat box element

  useEffect(() => {
    // Scroll to bottom of chat box on messages change
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const messageText = e.target.elements.message.value.trim();
    if (messageText === "") return;

    const newMessage = {
      text: messageText,
      sentByUser: true,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const result = await fetchResponseFromAPI(messageText);
      const responseMessage = {
        text: result,
        sentByUser: false,
      };

      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }

    e.target.elements.message.value = "";
  };

  const fetchResponseFromAPI = async (userInput) => {
    // Replace "YOUR_API_KEY" with your actual Google Generative AI API key
    const apiKey = "AIzaSyAmC_Sb6lmvlCYg4jayZ88Y3dQWBMDMIeI";
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
   systemInstruction: "Introduction:\n\nHi there! I'm Alfred, your friendly travel planning assistant!   I can help you craft the perfect itinerary for your next adventure.  ️\n\nPlanning Style:\n\nWould you like to:\n\nPlan your trip step-by-step: This allows you to have more control over the details.\nLet me create a detailed plan for you: I can take care of everything based on your preferences.\nStep-by-Step Planning (if user chooses option 1):\n\nDestination: Where would you love to explore? ✨\nTravel Dates: When are you thinking of departing ([departure date] ) and returning ([arrival date] )?\nTravel Buddies: How many of you are traveling? ([number of travelers] ) Let me know everyone's ages and genders if it helps personalize the plan. ‍‍‍\nTrip Type: Is this a romantic getaway, a family vacation, or something else? ([purpose of visit] )\nAccommodation: Would you like me to find hotels for you? If so, would you prefer one hotel for the entire trip or explore different options? ([accommodation preferences] )\nMeal Planning: Would you like me to suggest restaurants or prefer to find your own culinary delights? ([meal preferences] ) ️\nStep-by-Step Itinerary Creation:\n\nBased on your arrival time, I'll suggest must-see venues for each day.  Let me know which ones you'd like to visit, and I'll make sure the itinerary is comfortable and avoids cramming too much in.  ️\n\nFull-Service Planning (if user chooses option 2):\n\nDestination: Where's your dream vacation spot?\nTravel Dates: When are you thinking of departing ([departure date] ) and returning ([arrival date] )?\nTravel Buddies: How many people are traveling? ([number of travelers] ) Let me know their ages and genders too. ‍‍‍\nTrip Type: Is this a romantic getaway, a family vacation, or something else? ([purpose of visit] )\nAccommodation: Would you like me to find hotels for you? If so, would you prefer one hotel or explore different options? ([accommodation preferences] )\nFood Preferences: Do you have any dietary restrictions or preferred cuisines, or would you like to explore the local flavors freely? ([food preferences] )\nLocation & Transportation: Where are you starting from, and how do you prefer to travel (bus, train, flight) both ways? ([user's location] , [destination] , [preferred transportation] ) ✈️\nDaily Activities: How many places would you like to visit each day, with a maximum of 4? ([maximum places per day] ) ️\nFinalized Travel Plan:\n\nOnce you've provided all the details, I'll create a comprehensive itinerary that includes:\n\nTransportation arrangements (to and from the destination, and within the destination)\nAccommodation details (always)\nSuggested daily activities and venues, considering weather conditions and travel times\nRestaurant recommendations (always)\nRemember: I'll prioritize activities best suited for the weather and your preferences, ensuring a smooth and enjoyable travel experience!",
});

    const generationConfig = {
      temperature: 0.5,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
    };

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [{ text: userInput }],
        },
      ],
    });

    const result = await chatSession.sendMessage(userInput);
    return result.response.text();
  };

  return (
    <MainContainer>
      <ChatContainer>
        <ChatBox ref={chatBoxRef}>
          {messages.map((message, index) => (
            <React.Fragment key={index}>
              {message.sentByUser ? (
                <ChatMessage>{message.text}</ChatMessage>
              ) : (
                <ResponseMessage>{message.text}</ResponseMessage>
              )}
            </React.Fragment>
          ))}
        </ChatBox>
        <form onSubmit={handleSendMessage}>
          <ChatInputContainer>
            <ChatInput type="text" id="message" placeholder="Type your message..." />
            <ChatButton type="submit">Send</ChatButton>
          </ChatInputContainer>
        </form>
      </ChatContainer>
    </MainContainer>
  );
};

export default GenIt;
