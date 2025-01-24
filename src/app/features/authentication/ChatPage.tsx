import { useState, useEffect } from "react";
import { ref, push, onValue, set } from "firebase/database";
import { db } from "../../../firebase/firebase";
import { useAuth } from "../../context";
import EmojiPicker from "emoji-picker-react"; // Import the emoji picker
import { Theme } from "../../utils/Theme";

interface Message {
  text: string;
  sender: string;
  receiver: string;
  timestamp: number;
}

const ChatPage = () => {
  const { user } = useAuth(); // Get logged-in user
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [receiver, setReceiver] = useState(""); // Dynamic receiver
  const [availableUsers, setAvailableUsers] = useState<string[]>([]); // List of users
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Toggle emoji picker

  // Add the current user to the "users" node in Firebase when they log in
  useEffect(() => {
    if (user) {
      const userRef = ref(db, `users/${user.firstName}`);
      set(userRef, { firstName: user.firstName });
    }
  }, [user]);

  // Fetch all users dynamically from Firebase
  useEffect(() => {
    const usersRef = ref(db, "users");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersList = Object.keys(data);
        // Store Manager sees all users except themselves; users only see the Store Manager
        if (user?.firstName === "Riham") {
          setAvailableUsers(usersList.filter((name) => name !== user.firstName));
        } else {
          setAvailableUsers(["Riham"]); // Regular users only see the Store Manager
        }
      }
    });
  }, [user]);

  // Fetch messages and filter based on sender and receiver
  useEffect(() => {
    const messagesRef = ref(db, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const filteredMessages = (Object.values(data) as Message[]).filter(
          (msg) =>
            (msg.sender === user?.firstName && msg.receiver === receiver) ||
            (msg.sender === receiver && msg.receiver === user?.firstName)
        );
        setMessages(filteredMessages);
      }
    });
  }, [user, receiver]);

  // Send a new message to Firebase
  const sendMessage = () => {
    if (input.trim() && receiver.trim()) {
      const messagesRef = ref(db, "messages");
      push(messagesRef, {
        text: input,
        sender: user?.firstName || "Anonymous",
        receiver,
        timestamp: Date.now(),
      });
      setInput("");
    } else {
      alert("Please type a message and select a receiver.");
    }
  };

  // Handle emoji selection
  const handleEmojiClick = (emojiData: any) => {
    setInput((prevInput) => prevInput + emojiData.emoji);
    setShowEmojiPicker(false); // Close emoji picker after selection
  };

  return (
    <div style={{ display: "flex", height: "90vh" , padding: "20px", marginTop: "60px"  }}>
      {/* Left side: Receiver List */}
      <div
        style={{
          width: "25%",
          borderRadius: "15px",
          borderRight: "1px solid #ddd",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor:Theme.colors.secondary_light ,
          overflowY: "auto",
          padding: "1rem",
        }}
      >
        <h3>Chats</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {availableUsers.map((userFirstName) => (
            <li
              key={userFirstName}
              onClick={() => setReceiver(userFirstName)}
              style={{
                padding: "0.5rem 1rem",
                marginBottom: "0.5rem",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                backgroundColor: receiver === userFirstName ? "#f0f0f0" : "#fff",
                cursor: "pointer",
                fontWeight: receiver === userFirstName ? "bold" : "bold",
              }}
            >
              {userFirstName}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: Chat window */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Chat Header */}
        <div
          style={{
            padding: "1rem",
            borderBottom: "1px solid #ddd",
            fontWeight: "bold",
            borderRadius: "15px 15px 0 0",
            borderRight: "1px solid #ddd",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {receiver ? `Chat with ${receiver}` : "Select a user to start chatting"}
        </div>

        {/* Chat Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1rem",
            backgroundColor: "#f9f9f9",
           // borderRadius: "15px",
          borderRight: "1px solid #ddd",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent:
                  msg.sender === user?.firstName ? "flex-end" : "flex-start",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  maxWidth: "60%",
                  padding: "0.5rem 1rem",
                  borderRadius: "15px",
                  backgroundColor:
                    msg.sender === user?.firstName ? "#DCF8C6" : "#FFF",
                  color: "#333",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <strong style={{ fontSize: "0.8rem", display: "block" }}>
                  {msg.sender}
                </strong>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div style={{ padding: "1rem", borderTop: "1px solid #ddd" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              style={{
                marginRight: "0.5rem",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "15px",
                padding: "0.5rem",
                cursor: "pointer",
              }}
            >
              😊
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: "0.5rem",
                borderRadius: "15px",
                border: "1px solid #ccc",
                marginRight: "0.5rem",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Send
            </button>
          </div>
          {showEmojiPicker && (
            <div style={{ position: "absolute", bottom: "80px", left: "10px" }}>
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
