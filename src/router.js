import React from 'react';

export default class BasicRouter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      location: this.props.history.location.pathname
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if(nextState.location === this.state.location){
      return false
    } else {
      return true
    }
  }

  updateLocation = (location) => {
    console.log('location update')
    this.setState({location: location.pathname})
  }

  componentWillMount(){
    this.props.history.listen((location, action) => {
      this.updateLocation(location)
    })
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

BasicRouter.propTypes = {
  history: React.PropTypes.object,
  children: React.PropTypes.array
}
