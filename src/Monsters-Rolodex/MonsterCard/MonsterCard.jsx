import React, { Component } from "react";
import "./MonsterCard.css";

export default class MonsterCard extends Component {
  render() {
    return (
      <div className="card-container">
        <img
          alt="monster"
          src={`https://robohash.org/${this.props.monster.id}?set=set2&size= 180x250`}
        />
        <h3>{this.props.monster.name}</h3>
        <p>{this.props.monster.email}</p>
      </div>
    );
  }
}
