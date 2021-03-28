import React from 'react';

class TextField extends React.Component {
    constructor () {
        super();
        this.state = {firstOne: 'hi', secondOne: 'bye', match:false};
        this.onChange = this.onChange.bind(this);
    }

    onChange (event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });

        if (this.state.firstOne === this.state.secondOne) {
            this.state.match = true;
        }
        else {
            this.state.match = false;
        }
    }

    render () {
        return (
            <div>
                <input name="firstOne" type="text" onChange={this.onChange} value={this.state.firstOne}/>
                <input name="secondOne" type="text" onChange={this.onChange} value={this.state.secondOne}/>
                <h1 style={{opacity:this.state.match ? 0 : 1}}>They dont match</h1>
            </div>
        )
    }
}

export default TextField
