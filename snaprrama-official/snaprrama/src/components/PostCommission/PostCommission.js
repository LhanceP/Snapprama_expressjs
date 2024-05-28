import React, { useState, useRef } from 'react';
import './PostCommission.css'; // Import CSS file for styling

export default function PostCommission() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFiles([...files, file]);
  };

  const handleAttachFileClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = () => {
    console.log('Title:', title);
    console.log('Body:', body);
    console.log('Files:', files);
    setTitle('');
    setBody('');
    setFiles([]);
  };

  return (
    <div className="post-commission-container">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body:</label>
        <textarea id="body" value={body} onChange={handleBodyChange} />
      </div>
      <div className="form-group">
        <button className="attach-file-button" onClick={handleAttachFileClick}>Attach File</button>
        <input type="file" id="file" onChange={handleFileChange} ref={fileInputRef} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
