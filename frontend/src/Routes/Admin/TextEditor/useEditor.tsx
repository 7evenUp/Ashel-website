import { useState, useMemo } from 'react'
import { EditorState } from 'draft-js'

export type EditorApi = {
  state: EditorState
  onChange: (state: EditorState) => void
}

export const useEditor = (): EditorApi => {
  const [state, setState] = useState(() => EditorState.createEmpty())

  return useMemo(() => ({
    state,
    onChange: setState
  }), [state])
}