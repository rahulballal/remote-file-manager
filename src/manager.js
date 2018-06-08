import React, { PureComponent } from 'react';
import FileList from './file-list';
import Uploader from './uploader';
import { css } from 'react-emotion';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

class Manager extends PureComponent {
  state = {
    files: this.props.files,
    fileNamespace: this.props.fileNamespace
  };
  static defaultProps = {
    files: ['a.pdf', 'copy of passport republic of china.jpg'],
    fileNamespace: 'ID_DOCUMENTS::'
  };

  doSlowWork = () => {
    return new Promise(resolve => setTimeout(resolve, 3000));
  };

  handleFilesDropped = async newFiles => {
    try {
      const { files } = this.state;
      await this.doSlowWork();
      const updated = files.push(newFiles[0].name);
      console.log('updated', updated);
      this.setState({ files: updated });
    } catch (err) {
      return Promise.reject();
    }
  };
  render() {
    return (
      <div className={container}>
        <FileList
          files={this.state.files}
          fileNamespace={this.state.fileNamespace}
        />
        <Uploader onFileDropped={this.handleFilesDropped} />
      </div>
    );
  }
}

export default Manager;
