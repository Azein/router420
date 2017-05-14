import React from 'react';

export default class Route extends React.Component {

  routeMatch = () => {
    if (!this.props.hasOwnProperty('exactly') && this.props.location.includes(this.props.pattern)) {
      return <this.props.component/>
    }
    if (this.props.location === this.props.pattern) {return <this.props.component />}
    if (this.props.pattern.includes(':id')){
      const routeId = this.props.location.substring(this.props.location.lastIndexOf('/')+1)
      if (this.props.location === this.props.pattern.slice(0, -3)+routeId){
        return <this.props.component routeId={routeId} />
      }
    }
    return null
  }

  render(){
    return (
      this.routeMatch()
    )
  }
}

Route.propTypes = {
  location: React.PropTypes.string,
  pattern: React.PropTypes.string
}
