import React, {useEffect, useState} from 'react';

function Notifications () {
    const [messages, setMessages] = useState()
    
    useEffect(() => {
        setInterval(() => {
            console.log("Hello every 3 seconds");
        }, 3000)
    })

    return (
        <p>notifications</p>
    )
}

export default Notifications;