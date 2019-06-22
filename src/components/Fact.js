import React from 'react';
import axios from 'axios';
class Fact extends React.Component  {
  constructor(props) {
    super (props);
    this.state = {cats:{}, onLoad: true, catId:props.match.params.id};
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts/'+ this.state.catId)
    .then(response => {
      console.log(response)
      this.setState({cats:response.data})
    }
  )
  }

  render() {
      return (
          <div key ={this.state.cats._id} className= "fact">
            <div className= "line"></div>
            <h2> Cat fact</h2>
            <p>{this.state.cats.text}</p>
            <p>{this.state.cats.upvotes}</p>
          </div>
      )
    }

}
export default Fact;
