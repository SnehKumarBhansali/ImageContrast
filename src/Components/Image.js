import React from 'react';
import {Container} from 'mdbreact';

class Image extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contrastValue: 100,
            widthValue: undefined,
            heightValue: undefined,
            topValue: undefined,
            leftValue: undefined,
            position: 'relative',
            fullScreen: false
        }
    }

    handleChange = (event) => {
        this.setState({ contrastValue: event.target.value })
    }

    handleClick = () => {
        if (this.state.fullScreen === false) {
            this.setState({
                widthValue: 100,
                heightValue: 100,
                topValue: 0,
                leftValue: 0,
                position: 'fixed',
                fullScreen: true
            })
        }
        if (this.state.fullScreen === true) {
            this.setState({
                widthValue: undefined,
                heightValue: undefined,
                topValue: undefined,
                leftValue: undefined,
                position: 'relative',
                fullScreen: false
            })
        }
    }

    render() {
        let imgStyle = {
            filter: `contrast(${this.state.contrastValue}%)`,
            width: `${this.state.widthValue ? `${this.state.widthValue}%` : undefined}`,
            height: `${this.state.heightValue ? `${this.state.heightValue}%` : undefined}`,
            position: `${this.state.position}`,
            top: `${this.state.topValue === 0 ? `${this.state.topValue}` : undefined}`,
            left: `${this.state.leftValue === 0 ? `${this.state.leftValue}` : undefined}`
        }
        return (
            <Container>
                <img src='https://www.w3schools.com/w3images/sound.jpg' onClick={this.handleClick} style={imgStyle} />
                <h2 className="h1-responsive font-weight-bold my-5">Contrast Control</h2>
                    <label><strong>0</strong></label>
                    <input
                        type="range"
                        min="0"
                        max="200"
                        value={this.state.contrastValue}
                        onChange={(event) => this.handleChange(event)}
                    />
                    <label><strong>200</strong></label>
            </Container>
        )
    }
}

export default Image;