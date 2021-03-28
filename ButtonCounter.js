import React from 'react';

class ButtonCounter extends React.Component {
    constructor () {
        super();
        this.state = {count: 4};
    }


    render () {
        return (
            <button>You have clicked it {this.state.count} times</button>
        )
    }
}

export default ButtonCounter
