import { useState, useEffect } from 'react'
import axios from './helpers/axios'
import { getLocalAccessToken } from './helpers/local'
import Track from './Track'
import Artist from './Artist'

export default function Dashboard() {
    const [type, setType] = useState('tracks')
    const [timeRange, setTimeRange] = useState('short_term')
    const [topTracks, setTopTracks] = useState([])
    const [topArtists, setTopArtists] = useState([])
    const accessToken = getLocalAccessToken()

    useEffect(() => {
        if (type != 'tracks') return
        
        axios.post('/spotify/topTracks', { timeRange, accessToken })
        .then((res) => {
            setTopTracks(res.data.topTracks)
        })
        .catch((error) => {
            return
        })
    }, [type, timeRange])

    useEffect(() => {
        if (type != 'artists') return

        axios.post('/spotify/topArtists', { timeRange, accessToken })
        .then((res) => {
            setTopArtists(res.data.topArtists)
        })
        .catch((error) => {
            return
        })
    }, [type, timeRange])

    function selectTypeTab(selected) {
        const tracks = document.getElementById('tracks')
        const artists = document.getElementById('artists')

        if (selected == 'tracks' && tracks.classList.contains('active')) {
            return
        }
        else if (selected == 'artists' && artists.classList.contains('active')) {
            return
        }
        else {
            tracks.classList.toggle('active')
            artists.classList.toggle('active')
            setType(selected)
        }

    }

    function selectedTimeRangeTab(selected) {
        const thisMonth = document.getElementById('this-month')
        const last6Months = document.getElementById('last-6-months')
        let prevTimeRangeTab = ''

        if (thisMonth.classList.contains('active')) {
            prevTimeRangeTab = 'this-month'
        }
        else if (last6Months.classList.contains('active')) {
            prevTimeRangeTab = 'last-6-months'
        }
        else {
            prevTimeRangeTab = 'all-time'
        }

        if (selected == prevTimeRangeTab) {
            return
        }
        else {
            document.getElementById(selected).classList.toggle('active')
            document.getElementById(prevTimeRangeTab).classList.toggle('active')
        }

        if (selected == 'this-month') {
            setTimeRange('short_term')
        }
        else if (selected == 'last-6-months') {
            setTimeRange('medium_term')
        }
        else {
            setTimeRange('long_term')
        }
    }

    return (
        <div className='container-fluid' id='top-items-container'>
            <div className='container-fluid text-center my-5'>
                <h1 style={{ textTransform: 'capitalize', margin: '0', color: 'white'}}>Top { type }</h1>
            </div>
            <div className='d-flex flex-row justify-content-between my-3' style={{ fontSize: '12px' }}>
                <ul className='nav nav-pills' id='type'>
                    <li style={{ cursor: 'pointer' }} className='nav-item'>
                        <a className='nav-link active' id='tracks' onClick={() => {
                            selectTypeTab('tracks')
                        }}>Tracks</a>
                    </li>
                    <li style={{ cursor: 'pointer' }} className='nav-item'>
                        <a className='nav-link' id='artists' onClick={() => {
                            selectTypeTab('artists')
                        }}>Artists</a>
                    </li>
                </ul>
                <ul className='nav nav-pills' id='time-range'>
                    <li style={{ cursor: 'pointer' }} className='nav-item'>
                        <a className='nav-link active' id='this-month' onClick={() => {
                            selectedTimeRangeTab('this-month')
                        }}>This Month</a>
                    </li>
                    <li style={{ cursor: 'pointer' }} className='nav-item'>
                        <a className='nav-link' id='last-6-months' onClick={() => {
                            selectedTimeRangeTab('last-6-months')
                        }}>Last 6 Months</a>
                    </li>
                    <li style={{ cursor: 'pointer' }} className='nav-item'>
                        <a className='nav-link' id='all-time' onClick={() => {
                            selectedTimeRangeTab('all-time')
                        }}>All Time</a>
                    </li>
                </ul>
            </div>
            <ul className='list-group list-group-flush mb-5' style={{ height: '100%' }}>
                {
                    type == 'tracks' ?
                    topTracks.map((track, index) => (
                        <Track 
                            track={ track }
                            index={ index }
                            key={ track.id }
                        />
                    )) 
                    : 
                    topArtists.map((artist, index) => (
                        <Artist
                            artist={ artist }
                            index={ index }
                            key={ artist.id }
                        />
                    ))
                }
            </ul>
        </div>
    )
}
