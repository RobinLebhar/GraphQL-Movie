import React, { Component } from 'react'

class MovieCreate extends Component {
    constructor(props){
        super(props);
        this.state = { terms : ""};
    }
  render() {
    return (
      <div>
        <h1>Ajouter un film</h1>
        <form onSubmit={this.handleSubmit.bind(this)} className="input-field col s6">
        <input 
        type="text"
        className="validate"
        onChange={e => this.setState({terms : e.target.value})}
        />
        <label className="active">Titre</label>
        </form>
      </div>
    )
  }

  handleSubmit(e){
      console.log(this.state.terms);
  }
}

export default MovieCreate;