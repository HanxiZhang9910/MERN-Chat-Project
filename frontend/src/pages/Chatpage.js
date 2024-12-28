// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const Chatpage = () => {
//     const [chats, setChats] = useState([])

//     const fetchChats = async () => {
//         const data = await axios.get("/api/chat")
//         setChats(data)
//     }

//     useEffect(() => {
//         fetchChats();
//     }, [])

//     return (
//         <div>
//             {chats.map((chat) => (
//                 <div>{chat.chatName}</div>
//             ))}
//         </div>
//     )

// }

// export default Chatpage

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chatpage = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        try {
            const response = await axios.get("/api/chat");
            setChats(response.data); // Adjust to match your API's response structure
        } catch (error) {
            console.error("Failed to fetch chats:", error);
        }
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div>
            {Array.isArray(chats) ? (
                chats.map((chat, index) => (
                    <div key={chat.id || index}>{chat.chatName}</div>
                ))
            ) : (
                <p>No chats available</p>
            )}
        </div>
    );
};

export default Chatpage;
