// {Component} should be { Component } so it will cause one linting error.
import React, {Component} from 'react';

export default class TestComponent extends Component {
    render() {
        return (
            <div>Hello Twilio!</div>
        )
    }
}
