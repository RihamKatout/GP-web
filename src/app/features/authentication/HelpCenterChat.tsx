import { useState, useEffect, useRef } from "react";
import { ref, push, onValue, set } from "firebase/database";
import { db } from "../../../firebase/firebase";
import { useAuth } from "../../context";
import EmojiPicker from "emoji-picker-react";
import { Theme } from "../../utils/Theme";
interface Message {
  text: string;
  sender: string;
  receiver: string;
  timestamp: number;
  status: "read" | "unread";
}

const HelpCenterChat = () => {
  const { user } = useAuth(); // Get logged-in user
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [receiver, setReceiver] = useState("");
  const [availableUsers, setAvailableUsers] = useState<string[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const displayName = user?.firstName === "Riham" ? "Help Center" : user?.firstName;

  // Add the current user to Firebase
  useEffect(() => {
    if (user) {
      const userRef = ref(db, `users/${user.firstName}`);
      set(userRef, { firstName: user.firstName });
    }
  }, [user]);

  // Fetch all users dynamically
  useEffect(() => {
    const usersRef = ref(db, "users");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersList = Object.keys(data);
        if (user?.firstName === "Riham") {
          setAvailableUsers(usersList.filter((name) => name !== user.firstName));
        } else {
          setAvailableUsers(["Help Center"]);
        }
      }
    });
  }, [user]);

  // Fetch messages
  useEffect(() => {
    const messagesRef = ref(db, "helpCenterMessages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const filteredMessages = (Object.values(data) as Message[]).filter(
          (msg) =>
            (msg.sender === user?.firstName && msg.receiver === receiver) ||
            (msg.sender === receiver && msg.receiver === user?.firstName)
        );
        setMessages(filteredMessages);

        // Update status to "read" for messages sent to the current user
        filteredMessages
          .filter((msg) => msg.receiver === user?.firstName && msg.status === "unread")
          .forEach((msg) => {
            const msgRef = ref(db, `helpCenterMessages/${msg.timestamp}`);
            set(msgRef, { ...msg, status: "read" });
          });
      }
    });
  }, [user, receiver]);

  // Scroll to the bottom of the chat container
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, receiver]);

  // Send a message
  const sendMessage = () => {
    if (input.trim() && receiver.trim()) {
      const messagesRef = ref(db, "helpCenterMessages");
      push(messagesRef, {
        text: input,
        sender: user?.firstName || "Anonymous",
        receiver,
        timestamp: Date.now(),
        status: "unread",
      });
      setInput("");
    } else {
      alert("Please type a message and select a receiver.");
    }
  };

  const handleEmojiClick = (emojiData: any) => {
    setInput((prevInput) => prevInput + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
  };

  return (
    <div style={{ display: "flex", height: "90vh", padding: "45px", marginTop: "15px" }}>
      <div
        style={{
          width: "25%",
          borderRadius: "15px",
          borderRight: "1px solid #ddd",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: Theme.colors.secondary_light,
          overflowY: "auto",
          padding: "1rem",
        }}
      >
        <h3>Chats</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {availableUsers.map((userFirstName) => (
            <li
            key={userFirstName}
            onClick={() => setReceiver(userFirstName === "Help Center" ? "Riham" : userFirstName)}
            style={{
              padding: "0.5rem 1rem",
              marginBottom: "0.5rem",
              borderRadius: "8px",
              backgroundColor: receiver === userFirstName ? "#f0f0f0" : "#fff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {userFirstName}
          </li>
          
          ))}
        </ul>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            padding: "1rem",
            borderBottom: "1px solid #ddd",
            fontWeight: "bold",
          }}
        >
          {receiver ? `Chat with ${receiver}` : "Select a user to start chatting"}
        </div>

        <div
          ref={chatContainerRef}
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "1rem",
            backgroundColor: "#f9f9f9",
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
                  {msg.sender === "Riham" ? "Help Center" : msg.sender}
                </strong>
                {msg.text}
                <div style={{ fontSize: "0.8rem", color: "#777", marginTop: "0.5rem" }}>
                  {msg.status === "unread" ? "Unread" : "Read"} • {formatTimestamp(msg.timestamp)}
                </div>
              </div>
            </div>
          ))}
        </div>

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
            {showEmojiPicker && (
    <div style={{ position: "absolute", bottom: "50px", left: "10px", zIndex: 10 }}>
      <EmojiPicker onEmojiClick={handleEmojiClick} />
    </div>
  )}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={{
                padding: "0.5rem",
                borderRadius: "15px",
                border: "1px solid #ccc",
                marginRight: "0.5rem",
                width: "80%",
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
        </div>
      </div>
    </div>
  );
};

export default HelpCenterChat;
