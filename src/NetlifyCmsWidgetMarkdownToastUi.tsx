import React from 'react';

import '!style-loader!css-loader!@toast-ui/editor/dist/toastui-editor.css';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import { Editor as ToastUiEditor } from '@toast-ui/editor';

import NetlifyCmsWidgetProps from 'NetlifyCmsWidget';
import defaultOptions from 'defaultOptions';

export default class NetlifyCmsWidgetMarkdownToastUi extends React.Component<
  NetlifyCmsWidgetProps & { options?: EditorProps }
> {
  editorRef: React.RefObject<Editor>;
  constructor(props: NetlifyCmsWidgetProps & { options?: EditorProps }) {
    super(props);

    this.editorRef = React.createRef<Editor>();
  }

  getEditorInstance(): ToastUiEditor {
    if (!this.editorRef.current) throw new Error('editor missing');
    return this.editorRef.current.getInstance();
  }

  render(): JSX.Element {
    const { value, field, onChange, classNameWrapper } = this.props;

    return (
      <div className={classNameWrapper} style={{ padding: 0 }}>
        <Editor
          ref={this.editorRef}
          {...Object.assign({}, defaultOptions, field.toObject())}
          initialValue={value}
          onChange={() => {
            onChange(this.getEditorInstance().getMarkdown());
          }}
        />
      </div>
    );
  }
}
