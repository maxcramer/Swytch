import React from 'react';

class Notifications extends React.Component{
    state = {
        message1: 'Congratulations! XYZ has just purchased a new Swyft Pack',
        message2: 'Only 11 Swyft Packs Left! Get yours before they all pedal off!',
        message3: '17 other people are currently looking at this item',
        message4: 'Only 24 Hours left of the 50% Sale!'

    }

    render() {
        return(
            <div>
                <p>{this.state.message1}</p>
                <p>{this.state.message2}</p>
                <p>{this.state.message3}</p>
                <p>{this.state.message4}</p>

            </div>
        )
    }
}

export default Notifications;