import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { logout } from './helpers/authenticators'
import birdWhite from './icons/bird-white.png'

export default function Nav() {
    return (
        <div className='container-fluid d-flex flex-column'>
            <div className='container-fluid my-3'>
                <nav className='row'>
                    <div className='col d-flex align-items-center justify-content-start' style={{ color: 'white' }}>
                        <div className='d-flex flex-row align-items-center'>
                            <img src={ birdWhite } style={{ height: '50px' }}></img>
                            <h1 style={{ color: '#1DB954' }}>songbird</h1>
                        </div>
                    </div>
                    {/* <div className='col d-flex align-items-center justify-content-center'>
                        <Link to='' style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
                    </div> */}
                    <div className='col d-flex align-items-center justify-content-end'>
                        {/* <i style={{ fontSize: 25 }} className='bi bi-gear-fill'></i> */}
                        <button className='btn btn-outline-danger ms-3' style={{ fontSize: '12px', padding: '8px 16px' }} onClick={ logout }>Logout</button>
                    </div>
                </nav>
            </div>

            <Outlet />
        </div>
    )
}
