import React from 'react'

const DUMMY_DATA = [
    {
        senderID: 'perborgen',
        text: 'Hey, how is it going?'
    },
    {
        senderID: 'janedoe',
        text: 'Great! How about you?'
    },
    {
        senderID: 'perborgen',
        text: 'Good to hear! I  am great as well'
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div className="message-username">{message.senderID}</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList