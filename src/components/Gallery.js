import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import Menu from './Menu'
import gallery from '../js/gallery'
import GalleryItem from './GalleryItem'
import SearchForm from './SearchForm'

const styles = theme => ({
    galleryContainer: {
        display: 'flex',
        justifyContent: 'center'
    }
});

const Gallery = ({ classes, pathName }) => {
    const path = pathName.split('/')[1]
    return(
        <div>
            <Menu path={path} />
            <div className={classes.galleryContainer} >
                <SearchForm />
                <ul className='gallery'>
                    {gallery.map( el => <GalleryItem title={el.title} galleryImg={el.galleryImg} description={el.description} key={el.id} />)}
                </ul>
            </div>

        </div>
    )
}

Gallery.propTypes = {
    classes: PropTypes.shape({}).isRequired,
};


export default compose(
    withStyles(styles)
)(Gallery);

