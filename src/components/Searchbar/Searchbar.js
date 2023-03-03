import { Component } from 'react';
export class Searchbar extends Component {
  state = {
    nameImage: '',
  };

  onInpurChange = evt => {
    this.setState({ nameImage: evt.currentTarget.value });
  };
  onSubmitForm = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.nameImage);
  };
  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.onSubmitForm} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.onInpurChange}
            className="input"
            type="text"
            autoomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
