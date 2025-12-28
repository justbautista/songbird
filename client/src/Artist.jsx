import React from 'react'

export default function Artist({ artist, index }) {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center' id='artist'>
            <div className='d-flex flex-row align-items-center justify-content-around'>
                <small id='artist-rank'>{ index + 1 }</small>
                <div className='text-center mx-3' style={{ minWidth: '50px' }}>
                    <img src={ artist.images[artist.images.length - 1].url } height='50px'></img>
                </div>
                <div className='d-flex flex-column'>
                    <h5>{ artist.name }</h5>
                    <small style={{ textTransform: 'capitalize' }}>
                        { 
                            artist.genres.map((genre, index) => (
                                genre + (index == artist.genres.length - 1 ? '' : ', ')
                            )) 
                        }
                    </small>
                </div>
            </div>
            <div>
                <div className='progress ms-3' id='popularity-bar'>
                    <div className='progress-bar' style={{ width: `${artist.popularity}%`, backgroundColor: '#1DB954' }}></div>
                </div>
            </div>
        </li>
    )
}
