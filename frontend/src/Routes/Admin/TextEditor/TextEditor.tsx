import React from 'react'
import { Editor } from 'draft-js'
import { useEditorApi } from './context'

const TextEditor = () => {
  const { state, onChange } = useEditorApi()
  
  return (
    <div>
      <Editor
        placeholder="Кастомное содержание"
        editorState={state}
        onChange={onChange}
      />
    </div>
  )
}

export default TextEditor