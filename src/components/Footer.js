import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles =  makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
  }
})

const Footer = () => {
  const classes = useStyles();
  return(
    <footer>
    <div className={classes.root}>
      <Typography className={classes.title} variant="h6" component="h2" gutterBottom>
        Call us for more cat facts
      </Typography>
    </div>
    </footer>
  )
}

export default Footer;
