// import React from 'react';
// import {BrowserRouter as Router, Route, Link}  from 'react-router-dom';
//
// import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//
import About from './components/About.js';
import Fact from './components/Fact.js';
import Facts from './components/Facts.js';
import Contacts from './components/Contacts.js';
//
//
// const useStyles = {
//   root: {
//     width: '100%',
//     backgroundColor: 'transparent',
//   },
//   btn: {
//     color: 'black'
//   },
//   title: {
//     paddingTop: 25,
//     color : '#3f51b5',
//   }
// }
//
//
// class AppRouter extends React.Component  {
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//
//     const {classes} =this.props;
//   return (
//     <header>
//     <nav>
//       <BottomNavigation
//         // value={value}
//         // onChange={(event, newValue) => {
//         //   setValue(newValue);
//         // }}
//         showLabels
//         className={classes.root}
//       >
//         <BottomNavigationAction className={classes.btn} label="Home" ><Link to='/'></Link> </BottomNavigationAction>
//         <BottomNavigationAction className={classes.btn} label="About"> <Link to='/about'></Link></BottomNavigationAction>
//         <BottomNavigationAction className={classes.btn} label="Contact"><Link to='/contact'></Link></BottomNavigationAction>
//       </BottomNavigation>
//       </nav>
//
//     <div className={classes.root}>
//       <Typography className={classes.title} variant="h2" component="h2" gutterBottom>
//         Cat facts
//       </Typography>
//     </div>
//
//     <hr/>
//
//     <Router>
//       <Route path ='/' exact component={Facts}/>
//       <Route path ='/:id/' component={Fact}/>
//       <Route path ='/about' component={About}/>
//       <Route path ='/contacts' component={Contacts}/>
//     </Router>
//
//     </header>
//     )
//   }
// }
//
// AppRouter.propTypes = {
//   classes: PropTypes.object.isRequired};
//
//
// export default withStyles(useStyles)(AppRouter);




import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route}  from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory'
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// const history = createHistory();

const HomeLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} to="/facts"{...props} />);

const AboutLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/about" {...props} />
));

const ContactsLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/contacts" {...props} />
));

const useStyles =  makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  btn: {
  marginLeft: 20,
  marginRight: 20,
  },
  title: {
    paddingTop: 25,
    color : '#3f51b5',
  }
})


export default function LinkRouter() {
  const classes = useStyles();
  return (
    <Router >
      <div className="main">

      <div className={classes.root}>
        <Typography className={classes.title} variant="h2" component="h2" gutterBottom>
          Cat facts
        </Typography>
      </div>

      <nav>
        <Link className={classes.btn} component={HomeLink} to="/">
          Home
        </Link>
        <br />
        <Link className={classes.btn} component={AboutLink} to="/about" >
          About
        </Link>
        <br />
        <Link className={classes.btn} component={ContactsLink} to="/contacts">
        Contacts
        </Link>
        </nav>

        <Router>
          <Route path ='/' exact component={Facts}/>
          <Route path ='/facts' component={Facts}/>
          <Route path ='/:id' component={Fact}/>
          <Route path ='/about' component={About}/>
          <Route path ='/contacts' component={Contacts}/>
        </Router>
      </div>
    </Router>
  );
}
