import React from 'react';
import Dropzone from 'react-dropzone';
import { ClipLoader } from 'react-spinners';

class Uploader extends React.PureComponent {
  state = {
    uploadInProgress: false,
    uploadFailed: false
  };
  handleFileDrop = files => {
    const { onFileDropped } = this.props;
    const processFiles = () => {
      return onFileDropped(files)
        .then(() => {
          this.setState({ uploadInProgress: false });
        })
        .catch(err => {
          this.setState({ uploadFailed: true, uploadInProgress: false });
        });
    };
    this.setState({ uploadInProgress: true }, processFiles);
  };
  componentDidUpdate() {
    if (this.state.uploadInProgress) {
      this.setState();
    }
  }
  renderDropZone = () => {
    return (
      <Dropzone onDrop={this.handleFileDrop} height="300px" width="200px" />
    );
  };

  renderSpinner = () => {
    return (
      <div>
        {' '}<ClipLoader color="cyan" />
        <br /> Uploading ...{' '}
      </div>
    );
  };

  render() {
    const { uploadInProgress, uploadFailed } = this.state;
    return (
      <div>
        {uploadInProgress ? this.renderSpinner() : this.renderDropZone()}
        {uploadFailed &&
          <span style={{ color: 'red' }}>
            Sometimes life gives lemons and not melons ..
          </span>}
      </div>
    );
  }
}

export default Uploader;
