import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../'

export enum FlowStep {
  CITY = 1,
  POSITION = 2,
  INTERESTS = 3,
  ALL_SET = 4,
}

export interface FlowState {
  step: FlowStep
}

const initialState: FlowState = {
  step: FlowStep.CITY,
}

export const flowSlice = createSlice({
  name: 'flow',
  initialState,
  reducers: {
    next: (state) => {
      if(state.step < 4) {
        state.step += 1
      }
    },
    back: (state) => {
      if(state.step > 1) {
        state.step -= 1
      }
    },
    skip: (state) => {
      state.step = FlowStep.ALL_SET
    },
    goto: (state, action: PayloadAction<FlowStep>) => {
      state.step = action.payload
    },
  },
});
  
export const selectFlow = (state: RootState) => state.flow