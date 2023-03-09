import React from 'react';
// eslint-disable-next-line no-unused-vars
import SomethingWentWrong from './SomethingWentWrong';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: "" };
    }

    componentDidCatch(error) {
        this.setState({ error: `${error.name}: ${error.message}` });
    }

    render() {
        const { error } = this.state;
        if (error) {
            return (
                <>
                <SomethingWentWrong Error={ error }/>
                {/* <div>{error}</div> */}
                </>
               
            );
        } else {
            return <>{this.props.children}</>;
        }
    }
}