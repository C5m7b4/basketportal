import React, { useState, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import MonacoEditor from '@monaco-editor/react';
import ThemeDropDown from './ThemeDropdown';
import { ITheme } from './monaco-themes';

interface EditorProps {
  code: string;
  onCodeChange(s: string): void;
}

const QueryEditor: React.FC<EditorProps> = ({ code, onCodeChange }) => {
  const [value, setValue] = useState(code || '');
  const [theme, setTheme] = useState('');

  useEffect(() => {
    monaco.editor.defineTheme('my-theme', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#ff0000',
      },
    });
    monaco.editor.setTheme('my-theme');
  }, []);

  const handleThemeChange = (e: ITheme) => {
    // monaco.editor.defineTheme(e.name, {
    //   base: e.base as monaco.editor.BuiltinTheme,
    //   inherit: e.inherit,
    //   rules: e.rules,
    //   color: e.colors,
    // });
    monaco.editor.defineTheme('my-theme', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.foreground': '#000000',
        'editor.background': '#EDF9FA',
        'editorCursor.foreground': '#8B0000',
        'editor.lineHighlightBackground': '#0000FF20',
        'editorLineNumber.foreground': '#008800',
        'editor.selectionBackground': '#88000030',
        'editor.inactiveSelectionBackground': '#88000015',
      },
    });
    monaco.editor.setTheme('my-theme');
    setTheme(e.name);
  };

  const getTheme = () => {
    return theme;
  };

  const codeChanged = (v: string) => {
    onCodeChange(v);
  };

  console.log('theme', theme);
  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4x1">
      <ThemeDropDown handleThemeChange={handleThemeChange} />
      <MonacoEditor
        onChange={codeChanged}
        height="85vh"
        width={'100%'}
        language={'sql'}
        value={value}
        theme={'vs-dark'}
        defaultValue="// some comment"
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 16,
          wordWrap: 'on',
          folding: false,
          lineNumbersMinChars: 3,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default QueryEditor;
