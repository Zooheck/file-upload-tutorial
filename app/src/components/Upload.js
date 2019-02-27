import React, { Component } from 'react'
import './upload.css'

import Dropzone from './Dropzone'
import Progress from './Progress'
export default class upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    }
  }
  onFilesAdded = files => {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }))
  }
  render() {
    return (
      <div className="Upload">
        <span className="Title">Upload Files</span>
        <div className="Content">
          <div>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}
            />
          </div>
          <div className="Files">
          {this.state.files.map(file => {
              return (
                <div key={file.name} className="Row">
                  <span className="Filename">{file.name}</span>
                  {this.renderProgress(file)}
                </div>
              );
            })}
          </div>
        </div>
        <div className="Actions">

        </div>
      </div>
    );
  }
}
