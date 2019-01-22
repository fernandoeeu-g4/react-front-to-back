import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Fernando",
        email: "fernando@gmail.com",
        phone: "91 98234 6620"
      },
      {
        id: 2,
        name: "Joao",
        email: "joao@gmail.com",
        phone: "21 98562 1254"
      },
      {
        id: 3,
        name: "Matheus",
        email: "matheus@gmail.com",
        phone: "21 96587 4120"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
