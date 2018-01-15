import React, { Component } from 'react'
import { graphql, compose} from "react-apollo";
export default class ReviewCreate extends Component {

    constructor(props){
        super(props);
        this.state ={ terms : ""};
    }
  render() {
    return (
      <div>
        <div className="row">
        <form className="input-field col s6">
        <input type="text"
            className="validate"
            onChange={e => this.setState({terms : e.target.value})}
            value = {this.state.terms}
            onKeyPress={this.submitForm.bind(this)}
        />
        </form>
        </div>
      </div>
    )
  }

  submitForm(e){
      if(e.key ==="Enter"){
          e.preventDefault();
          // requete graphql
      }
  }
}
