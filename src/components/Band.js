import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <li key={this.props.band.id}>
          {this.props.band.name}
          <button onClick={() => this.props.deleteBand(this.props.band.id)}>DELETE</button>
        </li>
      </div>
    );
  }
};

export default Band;
