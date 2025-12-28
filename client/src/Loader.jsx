import React from 'react'

export default function Loader() {
    return (
        <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: 'black' }}>
            <div className='spinner-border' role='status'>
                <span class='sr-only'></span>
            </div>
        </div>
    )
}
