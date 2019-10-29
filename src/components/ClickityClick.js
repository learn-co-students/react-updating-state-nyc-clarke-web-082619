// Code ClickityClick Component Here
import React, {Component} from 'react';

export default class ClickityClick extends Component{
    constructor(){
        super();
        this.state = {
            theme: 'blue',
            addressInfo: {
                street: null,
                number: null,
                city: null,
                country: null
            },
            hasBeenClicked: false,
            currentTheme: 'blue'
        };
    }

    handleClick = () => {

        this.setState(previousState => {
            return {
                addressInfo:
                previousState.addressInfo = {
                    street: null,
                    number: null,
                    city: "New York City",
                    country: null
                }
            }
        }, () => {
            console.log(this.state)
        } )
        // this.setState({
            // hasBeenClicked: true
            // hasBeenClicked: true,
            // currentTheme: 'blue',
            // addressInfo: Object.assign({},
            //     this.state.addressInfo, {
            //     city: 'New York City',
            // })
            //     addressInfo: {
            //         ...this.state.addressInfo,
            //         city: 'New York City'
            //     }
            // }, () => console.log(this.state.hasBeenClicked))
            // no
            // console.log(this.state.hasBeenClicked)
            // console.log(this.state.addressInfo)
    }

    render(){
        return (
            <div>
                <p>
                    I have {this.state.hasBeenClicked ? null : 'not'} been clicked!
                </p>
                <button onClick={this.handleClick}>
                    Click me!
                </button>
            </div>
        )

    }
}

