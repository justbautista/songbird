import React from 'react'
import { formatSongLength } from './helpers/format'

export default function Track({ track, index }) {
    const songLength = formatSongLength(track.duration_ms)

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center' id='track'>
            <div className='d-flex flex-row align-items-center justify-content-around me-3'>
                <small id='track-rank'>{ index + 1 }</small>
                <div className='text-center mx-3' style={{ minWidth: '50px' }}>
                    <img src={ track.album.images[track.album.images.length - 1].url } height='50px'></img>
                </div>
                <div className='d-flex flex-column'>
                    <h6>{ track.name }</h6>
                    <small>
                        { 
                            track.artists.map((artist, index) => (
                                artist.name + (index == track.artists.length - 1 ? '' : ', ')
                            )) 
                        }
                    </small>
                </div>
            </div>
            <div className='d-flex flex-row align-items-center text-end'>
                <small>{ track.album.name }</small>
                <small className='ms-3'>{ songLength }</small>
            </div>
        </li>
    )
}
