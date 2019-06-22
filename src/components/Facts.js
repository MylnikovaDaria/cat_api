import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Facts extends React.Component  {
  constructor() {
    super ();
    this.state = {cats:[], onLoad: true};
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts')
    .then(response => {
      let cats = response.data.all.slice(0, 8).map(cat =>
        <div key ={cat._id} className= "fact">
          <div className="line"></div>
          <h2>Cat fact</h2>
          <p>{cat.text}</p>
          <p><i className="far fa-thumbs-up"></i> {cat.upvotes}</p>
          <Link to = {{pathname:`/${cat._id}/`}}>View</Link>
        </div>
      )
      this.setState({onLoad:false})
      this.setState({cats:cats})
    })
  }

  render() {
    if (this.state.onLoad) {
      return (
      <div className="load">Loading...</div>
      )
    }else {
      return (
        <div className= "facts">{this.state.cats}</div>
      )
    }
  }
}
export default Facts;
