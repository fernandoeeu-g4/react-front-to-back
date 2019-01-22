import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    showAddContact: false
  };

  onShowAddContact = () => {
    this.setState({
      showAddContact: !this.state.showAddContact
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = (e, value) =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { showAddContact } = this.state;
    const { name, email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">
          Add Contact&nbsp;&nbsp;
          <i
            onClick={this.onShowAddContact}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
        </div>
        {showAddContact ? (
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Name..."
                  value={name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Email..."
                  value={email}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter Phone..."
                  value={phone}
                  onChange={this.onChange}
                />
              </div>

              <input
                type="submit"
                value="Add Contact"
                className="btn btn-light btn-block"
                onClick={this.onSubmit}
              />
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default AddContact;
