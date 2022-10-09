
import { ClientQuizState } from './quiz/client/duck'
export interface RootState {
    clientQuiz: ClientQuizState
    adminQuiz: { [key: string]: any }
}