import { createAction, createReducer } from '@reduxjs/toolkit'

export interface ClientQuizState {
    currentStep?: number,
    steps?: number,
    validatedCurrentStep?: boolean,
    quiz?: {
        title: string,
    }
}

export const handleCurrentStep = createAction('HandleCurrentStep')

const initialState: ClientQuizState = { 
    currentStep: 2, 
    steps: 5, 
    validatedCurrentStep: true,
    quiz: {
        title:'Examen tercero b'
    } 
}

const clientQuizReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(handleCurrentStep, (state: ClientQuizState) => {
            if (typeof state.currentStep === 'number' &&
                typeof state.steps === 'number' &&
                state.currentStep < state.steps
            ) {
                state.currentStep++;
                // state.validatedCurrentStep = false;
            }
            // if( !isNaN(state.currentStep) && !isNaN(state.steps)){
            //     state.currentStep++;
            // }
        })
})

export default clientQuizReducer;