import { React, Component } from 'react';

import './style.css';

export default class TextBlock extends Component {
    state = {
        text: ''
    };

    onSubmit = (e) => {
        const { text } = this.state;

        this.setState({ 
            text: '' 
        });

        this.props.Add(text);
    };

    onChange = (e) => {
        this.setState({
          text: e.currentTarget.value
        })
    };

    render() {
        return(
            <div className="text-block">
                <input type="text"
                    className="text-block-input"
                    value={this.state.text}
                    onChange={this.onChange}
                    placeholder="Some text here..." />
                <button
                    className="text-block-button"
                    onClick={this.onSubmit}>
                    Save
                </button>
            </div>
        );
    }
};
