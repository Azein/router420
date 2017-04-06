import React from 'react';

export default class Router extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      location: this.props.history.location.pathname
    }
    this.unlisten = null;
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return !(nextState.location === this.state.location)

  }

  updateLocation = (location) => {
    console.log('location update')
    this.setState({location: location.pathname})
  }

  componentWillMount(){
    this.unlisten = this.props.history.listen((location, action) => {
      this.updateLocation(location)
    })
  }

  componentWillUnmount(){
    this.unlisten();
    this.unlisten = null;
  }

  render(){
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        location: this.state.location
      })
    })
    return (
      <div className={this.props.styles}>
        {children}
      </div>
    )
  }
}

Router.propTypes = {
  history: React.PropTypes.object,
  children: React.PropTypes.array
}
