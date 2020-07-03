import React, {useEffect, useState} from 'react';

let currentMessageIndex = 0;
let messages = ['message1', 'message2', 'message3', 'message4'];  

function Notifications () {
    const [lastMessage, setLastMessages] = useState()

    useEffect(() => {
        setInterval(() => {
            setLastMessages(messages[currentMessageIndex]);

            if(currentMessageIndex + 1 < messages.length) {
                currentMessageIndex += 1;
            } else {
                currentMessageIndex = 0;
            }
            setTimeout(() => {
                setLastMessages(null);
            }, 3000)
            console.log(setLastMessages);
        }, 8000)
        
    })

    return (
        <p>{lastMessage}</p>
    )
}

export default Notifications;