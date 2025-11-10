import type { PageCreationAction, PageNoteAction, TextChunkAction, CanvasPageUpdateAction } from '@chat-tutor/agent'
import type { CanvasPageAction } from '@chat-tutor/canvas'
import type { MermaidPageAction } from '@chat-tutor/mermaid'
import type { FullizeAction } from '~~/packages/shared/src'

export type AllAction = 
  | PageCreationAction
  | TextChunkAction
  | CanvasPageAction
  | FullizeAction<CanvasPageUpdateAction>
  | FullizeAction<MermaidPageAction>
  | PageNoteAction