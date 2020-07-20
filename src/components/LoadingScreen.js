import React, { Component } from 'react'

export class LoadingScreen extends Component {
    render() {
        return (
            <div>
                <br /><br /><br />
                <h1>Loading data from backend</h1>
                <br />
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

export default LoadingScreen
