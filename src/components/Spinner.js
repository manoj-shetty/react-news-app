import React from 'react'
import loading from './load.gif'

const Spinner = () => {
    return (
        <div className='text-center'>
            <img src={loading} width="100px" alt="loading.." />
        </div>
    )
}

export default Spinner