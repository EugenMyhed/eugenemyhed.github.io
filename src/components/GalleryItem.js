import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../scss/_galleryItem.scss'

const GalleryItem = ({ title, galleryImg }) => (
    <li className='galleryItems'>
        <Typography gutterBottom variant="h5" component="h2">
            {title}
        </Typography>
        <img className='galleryImg' src={galleryImg} alt='some img'/>

        <Button className='moreInfoBtn' variant="contained" color="secondary">More</Button>
    </li>
)

export default GalleryItem