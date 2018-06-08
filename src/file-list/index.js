import React, { PureComponent } from 'react';
import { css } from 'react-emotion';
import FileItem from './file-item';
import uniqueId from 'lodash/uniqueId';

const classList = css`
  list-style-type: none;
  padding: 0;

  li {
    border: 1px solid black;
    margin-bottom: 2px;
  }
`;

class FileList extends PureComponent {
  state = {
    files: this.props.files
  };

  renderFileItem = (item, key) => {
    console.log(item);
    return (
      <li key={key}>
        <FileItem
          file={item}
          fileId={key}
          onDelete={this.handleItemDelete}
          onDownload={this.handleItemDownload}
        />
      </li>
    );
  };

  handleItemDelete = item => {
    console.log(item);
  };

  handleItemDownload = item => {
    console.log(item);
  };

  render() {
    const { files } = this.state;
    const { fileNamespace } = this.props;
    return (
      <ul className={classList}>
        {files.map(file => this.renderFileItem(file, uniqueId(fileNamespace)))}
      </ul>
    );
  }
}

export default FileList;
