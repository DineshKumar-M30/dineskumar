// src/Components/MessagePage.jsx
import React, { useState } from 'react';
import './MessagePage.css';

const contacts = [
    { id: 1, name: 'Dr. Evelyn Reed', role: 'Teacher', lastMessage: 'Please review the test scores.', avatarColor: '#fee2e2' },
    { id: 2, name: 'Mr. David Chen', role: 'Teacher', lastMessage: 'The syllabus has been updated.', avatarColor: '#e0f2fe' },
    { id: 3, name: 'Ashwin G.', role: 'Admin', lastMessage: 'Can you approve the expense report?', avatarColor: '#d1fae5' },
    { id: 4, name: 'Sophia Wilson', role: 'Student', lastMessage: 'I have a question about my fees.', avatarColor: '#fef3c7' },
];

const sampleConversation = [
    { id: 1, text: 'Hello, Dr. Reed. Do you have a moment to discuss the Physics assignment?', type: 'sent', time: '10:00 AM' },
    { id: 2, text: 'Good morning. Yes, I do. What seems to be the issue?', type: 'received', time: '10:02 AM' },
    { id: 3, text: 'I am reviewing the test scores now. Everything looks correct, but I need clarification on one student\'s grade.', type: 'sent', time: '10:05 AM' },
    { id: 4, text: 'I just sent the updated grades spreadsheet. Let me know if you see the change.', type: 'received', time: '10:07 AM' },
];

function MessagePage() {

    const [activeContactId, setActiveContactId] = useState(1);
    const activeContact = contacts.find(c => c.id === activeContactId);

    return (
        <div className="message-page-container">
            <div className="page-header">
                <h1>Message</h1>
            </div>

            <div className="messaging-interface">
                
                {/* Left Panel: Contact List */}
                <div className="contact-list-panel">
                    <div className="contacts-header">
                        <h2>Conversations</h2>
                    </div>
                    
                    <div className="contacts-search">
                        <span className="search-icon">🔍</span>
                        <input placeholder="Search contacts" />
                    </div>
                    
                    {contacts.map(contact => (
                        <div 
                            key={contact.id} 
                            className={`contact-item ${contact.id === activeContactId ? 'active' : ''}`}
                            onClick={() => setActiveContactId(contact.id)}
                        >
                            <div className="contact-avatar" style={{ backgroundColor: contact.avatarColor }}>
                                {contact.name[0]}
                            </div>
                            <div className="contact-details">
                                <span className="contact-name">{contact.name}</span>
                                <span className="contact-last-message">{contact.lastMessage}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Panel: Chat Window */}
                <div className="chat-window">
                    <div className="chat-header">
                        <div className="contact-avatar" style={{ backgroundColor: activeContact.avatarColor }}>
                            {activeContact.name[0]}
                        </div>
                        <div className="contact-details">
                            <span className="contact-name">{activeContact.name}</span>
                            <span className="contact-last-message" style={{color: 'var(--success)'}}>• {activeContact.role}</span>
                        </div>
                    </div>
                    
                    <div className="chat-thread">
                        {sampleConversation.map(msg => (
                            <div key={msg.id} className={`message-bubble ${msg.type}`}>
                                {msg.text}
                                <div className="message-time">{msg.time}</div>
                            </div>
                        ))}
                    </div>

                    <div className="message-input-area">
                        <input type="text" placeholder="Type your message here..." className="message-input" />
                        <button className="send-button">➔</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessagePage;