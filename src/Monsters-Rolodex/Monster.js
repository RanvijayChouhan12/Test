import React, { Component } from "react";
import CardList from "./Card-List/CardList";
import "./Monster.css";
import { SearchBox } from "./Search-Box/SearchBox";
// import MonsterData from "../Data/MonsterData";

export class Monster extends Component {
  state = { monsters: [], SerachField: "" };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }
  render() {
    const { monsters, SerachField } = this.state;
    const filterMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(SerachField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Your Monster"
          handlepress={(e) => this.setState({ SerachField: e.target.value })}
        />
        <CardList monster={filterMonster} />
      </div>
    );
  }
}

export default Monster;
