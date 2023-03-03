import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
export class ImageGallery extends Component {
  state = {
    images: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=32915984-753662c00e21893fc193d0b46&image_type=photo&orientation=horizontal&per_page=12`
      ).then(response =>
        response.json().then(hits => this.setState({ images: hits }))
      );
    }
  }
  render() {
    return (
      <ul className="gallery">
        {this.state.images && <ImageGalleryItem hits={this.state.images} />}
      </ul>
    );
  }
}
