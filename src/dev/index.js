/* eslint-disable camelcase */
import './bootstrap.js';
import CMS, { init } from 'netlify-cms';
import 'netlify-cms/dist/cms.css';
import { default as Control } from '../NetlifyCmsWidgetMarkdownToastUi';

const config = {
  backend: {
    name: 'test-repo',
    login: false,
  },
  media_folder: 'assets',
  collections: [
    {
      name: 'test',
      label: 'Test',
      files: [
        {
          file: 'test.yml',
          name: 'test',
          label: 'Test',
          fields: [
            {
              name: 'test_widget',
              label: 'Toast UI Markdown Widget',
              widget: 'markdown-toast-ui',
            },
            {
              name: 'markdown_widget',
              label: 'Stock Markdown Widget',
              widget: 'markdown',
            },
          ],
        },
      ],
    },
  ],
};

CMS.registerWidget('markdown-toast-ui', Control, null);

init({ config });
