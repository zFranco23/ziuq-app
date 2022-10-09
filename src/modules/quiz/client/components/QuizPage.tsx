import React from 'react'
import AnswerButton from '../../../../components/AnswerButton/AnswerButton';
import BottomBar from '../../../../components/BottomBar/BottomBar'
import Footer from './Footer/Footer'
import Header from './Header/Header'

import style from './QuizPage.module.scss';

const QuizPage = () => {
  return (
    <div className={style.wrapQuizPage}>
        <Header />
        <div className={style.wrapQuestion}>
            <h2>Question</h2>
            <AnswerButton idx={0} answer={'hola'}/>
            <AnswerButton idx={1} answer={'hola'}/>
            <AnswerButton idx={2} answer={'hola'}/>
            <AnswerButton idx={3} answer={'hola'}/>
        </div>
        <BottomBar>
            <Footer />
        </BottomBar>
    </div>
  )
}

export default QuizPage