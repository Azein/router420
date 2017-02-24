import React from 'react';
import { locationReplace } from './history.js';

export default class Redirect extends React.Component {

  componentWillMount(){
    locationReplace(this.props.to)
  }

  render(){
    return null
  }
}

Redirect.propTypes = {
  to: React.PropTypes.string
}
