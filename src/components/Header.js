import React from 'react';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import HomeIcon from '@material-ui/icons/Home';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  btn: {

  },
  title: {
    paddingTop: 25,
    color : '#3f51b5',
  }
});

export default function SimpleBottomNavigation() {
const classes = useStyles();
const [value, setValue] = React.useState(0);

return(
  <header>

  <div className={classes.root}>
    <Typography className={classes.title} variant="h2" component="h2" gutterBottom>
      Cat facts
    </Typography>
  </div>
  <nav>
       <BottomNavigation
         value={value}
         onChange={(event, newValue) => {
           setValue(newValue);
         }}
         showLabels
         className={classes.root}
       >
         <BottomNavigationAction className={classes.btn} ><Link to='/'>Home</Link> </BottomNavigationAction>
         <BottomNavigationAction className={classes.btn} label="About"> <Link to='/about'></Link></BottomNavigationAction>
         <BottomNavigationAction className={classes.btn} label="Contact"><Link to='/contact'></Link></BottomNavigationAction>
       </BottomNavigation>
       </nav>

  </header>
  )
}
