import React from 'react';

export default class Route extends React.Component {

  routeMatch = () => {
    if (!this.props.hasOwnProperty('exactly') && this.props.location.includes(this.props.pattern)) {
      return <this.props.component/>
    }
    if (this.props.location === this.props.pattern) { return <this.props.component /> }
    if (this.props.pattern.includes(':'){
      const params = this.parseRouteVals(this.props.pattern, this.props.location)
      return <this.props.component routeId={params} />
    }
    return null
  }

  parseRouteVals = ( pattern, real ) => {
      const rx = /:([^\/]+){1,}/g
      const out = {};
      const parsed = real.match(pattern.replace(rx,'(.*?)'))
      pattern
        .match(rx)
        .forEach((r,i) => out[r.substr(1)] = parsed[i+1])
      return out
  }

  render(){
    return (
      this.routeMatch()
    )
  }
}

Route.propTypes = {
  location    : React.PropTypes.string,
  pattern     : React.PropTypes.string
}
