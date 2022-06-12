import React from 'react';

import '!style-loader!css-loader!@toast-ui/editor/dist/toastui-editor.css';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import { Editor as ToastUiEditor } from '@toast-ui/editor';

import NetlifyCmsWidgetProps from 'NetlifyCmsWidget';
import defaultOptions from 'defaultOptions';

export default function NetlifyCmsMarkdownToastWidget(
  props: NetlifyCmsWidgetProps & { options?: EditorProps }
): JSX.Element {
  const { value, options = {}, onChange, classNameWrapper } = props;

  const editorRef = React.useRef<Editor>();

  const getInstance = (): ToastUiEditor => {
    if (!editorRef.current) throw new Error('editor missing');
    return editorRef.current.getInstance();
  };

  return (
    <div className={classNameWrapper}>
      <Editor
        ref={editorRef}
        initialValue={value}
        onChange={() => {
          onChange(getInstance().getMarkdown());
        }}
        {...Object.assign({}, defaultOptions, options)}
      />
    </div>
  );
}
