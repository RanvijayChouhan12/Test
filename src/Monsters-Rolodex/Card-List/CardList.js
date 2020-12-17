import React, { Component } from "react";
import "./Card-List.css";
import MonsterCard from "../MonsterCard/MonsterCard";

export default class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monster.map((datamonster) => (
          <MonsterCard key={datamonster.id} monster={datamonster} />
        ))}
      </div>
    );
  }
}
