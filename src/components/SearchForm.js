import React from 'react'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { compose } from 'recompose';


const styles = theme => ({
    form: {
        padding: theme.spacing.unit * 2,
    },
    formContainer:{
        marginTop: theme.spacing.unit * 4,
        backgroundColor: '#f2f2f2',
        borderRadius: theme.shape.borderRadius * 2,
        height: '450px'

    },
    legend: {
        padding: theme.spacing.unit,
        borderBottom: '1px solid black'
    }
});


const SearchForm = ({ classes }) => (
    <div className={classes.formContainer}>
        <form className={classes.form}>
            <TextField
                className={classes.formField}
                label="Search"
                variant="outlined"
            />
            <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox />
                }
                label="Name"
            />
            <FormControlLabel
                control={
                    <Checkbox />
                }
                label="Price"
            />
            </FormGroup>
        </form>
        <div className={classes.legend}>
            <Typography gutterBottom variant="h5" component="h3"> Legend: </Typography>
        </div>
    </div>
)

SearchForm.propTypes = {
    classes: PropTypes.shape({}).isRequired,
};


export default compose(
    withStyles(styles)
)(SearchForm);
