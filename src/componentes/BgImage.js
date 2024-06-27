import React, { Component } from 'react'
import './BgImage.css'

class BgImage extends Component {
    render() {
        return (
            <div className='bg-image'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default BgImage