import React, { Component } from 'react';

class EventCard extends Component {

  render() {
    console.log(this.props)
    return (
    <div className="searcheventcard">
    <p>{this.props.clubObj.name}</p>
    <p>{this.props.clubObj.date}</p>
    <p>{this.props.clubObj.time}</p>
    <p>{this.props.clubObj.description}</p>
    <p>{this.props.clubObj.address}</p>
    <p>{this.props.clubObj.city}</p>
    <p>{this.props.clubObj.state}</p>
    <p>{this.props.clubObj.zipcode}</p>
    </div>
    )

  }

}

export default EventCard
