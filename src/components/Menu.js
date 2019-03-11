import React from 'react'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import '../scss/_menu.scss'
import logo from '../img/logo2.png'

const styles = () => ({
   link: {
       color: '#fff',
       '&:hover':{
          color: '#f50057'
       }
   },
   selectedPage: {
      color: '#f50057'
   },
   unSelectedPage: {
     color: '#fff'
  }
});


const Menu = ({ classes, path}) => (
   <header className="mainContainer">
      <Link  to="/">
         <img src={logo} alt="logo" />
      </Link>

      <div  className="menuContainer">
      <Link to="/">
         <Typography component="h2" variant="headline" className={`${classes.link} ${  
                  path === '/' ? classes.selectedPage : classes.unSelectedPage}`
               }
            >Home</Typography>
      </Link>
      <Link to="/about">
         <Typography component="h2" variant="headline" className={`${classes.link} ${  
                  path === 'about' ? classes.selectedPage : classes.unSelectedPage}`
               }>About</Typography>
      </Link>
      <Link to="/gallery">
         <Typography component="h2" variant="headline" className={`${classes.link} ${  
                  path === 'gallery' ? classes.selectedPage : classes.unSelectedPage}`
               }>Gallery</Typography>
      </Link>
      <Link to="/blog">
         <Typography component="h2" variant="headline" className={`${classes.link} ${  
                  path === 'blog' ? classes.selectedPage : classes.unSelectedPage}`
               }>Blog</Typography>
      </Link>
      </div>
   </header>

)


Menu.propTypes = {
   classes: PropTypes.shape({}).isRequired,
};


export default compose(
   withStyles(styles)
)(Menu);
