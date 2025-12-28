import { useState, useEffect } from 'react'
import { accessURL } from './helpers/access'
import axios from './helpers/axios'
import {
    setLocalAccessToken,
    setLocalRefreshToken
} from './helpers/local'
import Loader from './Loader'
import logo from './icons/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png'
import birdWhite from './icons/bird-white.png'

export default function Login() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const code = new URLSearchParams(window.location.search).get('code')
        const error = new URLSearchParams(window.location.search).get('error')
        
        if (error) {
            setLoading(false)
            window.history.pushState({}, null, '/')
            console.log(error)
            return
        }

        if (!code) {
            setLoading(false)
            return
        }
        
        axios.post('/auth/login', { code })
        .then(res => {
            setLocalAccessToken(res.data.accessToken)
            setLocalRefreshToken(res.data.refreshToken)
            window.history.pushState({}, null, '/dashboard')
            window.location.reload()
        })
        .catch((error) => {
            setLoading(false)
            return
        })        
    }, [])

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <div className='container-fluid d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh', color: 'white' }}>
            <div className='text-center'>
                <img src={ birdWhite } style={{ height: '50px' }}></img>
                <h1>songbird</h1>
            </div>
            <a className='btn btn-lg mt-5' style={{ backgroundColor: '#1DB954', color: 'white', borderRadius: '40px' }} href={ accessURL }>
                Login
                <img className='ms-2' style={{ height: '30px' }} src={ logo }></img>    
            </a>
        </div>
    )
}
