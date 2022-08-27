import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })

        console.log('from inside "componentDidCatch":');
        console.log('error:', error);
        console.log('info:', info);
    }

    render() {
        if(this.state.hasError) {
            return <h1>Ooooops! Something's off :/</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundry;