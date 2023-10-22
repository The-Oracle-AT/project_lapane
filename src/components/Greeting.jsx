import { useState } from 'preact/hooks';

export default function Greeting({arrayOfMessages}) {

    const randomIndex = () => arrayOfMessages[Math.floor(Math.random() * arrayOfMessages.length)];
    const [message, setMessage] = useState(arrayOfMessages[0])

    return (
        <div className="message-container">
            <h3>{message}! Thank you for visiting!</h3>
            <button onClick={() => setMessage(randomIndex())}>Click for new message</button>
        </div>
    )
}