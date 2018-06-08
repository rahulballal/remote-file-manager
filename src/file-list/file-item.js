import React from 'react';
import { ArrowDownIcon, CircleSlashIcon } from 'react-octicons';
import { css } from 'react-emotion';

const fileContainer = css`
  width: 100%;
  height: 20px;
  display: inline-flex;
  align-items: center;
`;

const fileName = css`
  width: 80%;
  margin-left: 15px;
`;

const FileItem = ({ file,fileId, onDownload, onDelete }) => {
  const handleDownload = () => onDownload({file, fileId});
  const handleDelete = () => onDelete({file, fileId});
  return (
    <div className={fileContainer}>
      <div className={fileName}>
        {file}
      </div>
      <div>
        <ArrowDownIcon style={{ backgroundColor: 'green' }} value={fileId} onClick={handleDownload} />
      </div>
      <div style={{ paddingLeft: '20px' }}>
        <CircleSlashIcon style={{ backgroundColor: 'red' }} value={fileId} onClick={handleDelete}/>
      </div>
    </div>
  );
};

export default FileItem;
