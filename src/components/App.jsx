import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
export class App extends Component {
  state = {
    imageName: null,
  };
  componentDidMount() {
    if (this.state.imageName) {
    }
  }
  handleSubmit = hits => {
    this.setState({ imageName: hits });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery imageName={this.state.imageName} />
      </div>
    );
  }
}
