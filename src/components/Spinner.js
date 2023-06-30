import React, { Component } from 'react'
import loading from './load.gif'

export class Spinner extends Component {
    render() {
        return(
            <div className='text-center'>
                <img src={loading} width="100px" alt="loading.." />
            </div>
        )
    }
}