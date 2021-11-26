import "./App.css";
import React from "react";
import Dashboard from "./components/Dashboard";
import Person from "./Person/Person";
import Pet from "./Pet/Pet";
import { Component } from "react";
import Banner from "./components/Banner";
import Radium from "radium";

class App extends Component {
  titleChangeListener = (event) => {
    this.setState({ title: event.target.value });
  };
  toggleDisplayHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  changeNameHandler = (teamLead) => {
    this.setState({
      persons: [
        { name: teamLead, experience: 13 },
        { name: "Lucy", experience: 14 },
        { name: "Nomad", experience: 15 },
        { name: "Uriel", experience: 11 },
        { name: "Ken", experience: 12 },
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    // way1
    //const persons = this.state.persons.slice();
    // way2
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  state = {
    persons: [
      { name: "Mark", experience: 3 },
      { name: "John", experience: 4 },
      { name: "Ken", experience: 5 },
      { name: "Kevin", experience: 1 },
      { name: "Tim", experience: 2 },
    ],
    title: "Hello React",
    showPersons: false,
  };
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px sold red",
      padding: "4px",
      cursor: "pointer",
      ":hover":{backgroundColor:"lightblue", color:"black"}
    };

    let persons = null;

    // step1
    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return (
              <Person key={index} clickCallback={() => this.deletePersonHandler(index)}
                name={p.name}
                experience={p.experience}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style.color = "black";
      style[":hover"]={
        backgroundColor:"lightred",
        color:"black"
      }
    }
    // step1
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("blue");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
          {/* step2 */}
          <p className={classes.join(" ")}>this is my indicator</p>
          <Banner
            appTitleChangeCallback={this.titleChangeListener}
            name={this.state.title}
          />
          <Dashboard />
          <button key="button1" style={style} onClick={() => this.toggleDisplayHandler()}>
            show/hide
          </button>

          <button key="button2" style={style}
            onClick={() => this.changeNameHandler("!!!Scott!!!")}
          >
            Change
          </button>
          {persons}
        </header>
      </div>
    );
  }
}

export default Radium(App);
