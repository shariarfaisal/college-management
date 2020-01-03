import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class ControlledEditor extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     editorState: EditorState.createEmpty(),
  //   };
  // }
  //
  // onEditorStateChange: Function = (editorState) => {
  //   this.setState({
  //     editorState,
  //   });
  // };

  render() {
    const { editorState,onEditorStateChange } = this.props;
    return (
      <Editor
        className="bg-dark"
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        placeholder="Description"
        onEditorStateChange={onEditorStateChange}
        hashtag={{
          separator: ' ',
          trigger: '#',
        }}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji']
        }}
      />
    )
  }
}

export default ControlledEditor
