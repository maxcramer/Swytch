import React, {useEffect, useState} from 'react';

import './Notifications.css';

let currentMessageIndex = 0;
let messages = ['Congratulations Mr Franks! Just Purchased a Swyft Pack!', 'Only 12 Swyft Packs left! Get yours before it we run out!', '15 other people are currently looking at this item', 'Only 24 hours left of the 50% off sale!'];  

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
            }, 4000)
            console.log(setLastMessages);
        }, 8000)

        clearInterval();
        
    }, [])

    return (
        <div className="notifications__container">
            <p className="notifications-message">{lastMessage}</p>
        </div>
    )
}

export default Notifications;