import React, { useCallback, useState } from 'react';
import M from 'materialize-css'
import styles from './gameQuestions.module.css'
import { useDispatch, useSelector } from 'react-redux';

function GameQuestions({ question }) {
  const dispatch = useDispatch();
  const { topics } = useSelector(state => state.topics);
  const localStoragePoints = localStorage.setItem('points', '');


  const [isAnswered, setIsAnswered] = useState(true)
  const [isCorrect, setIsCorrect] = useState(false)

  const openModal = useCallback(function () {
    const elems = document.querySelectorAll('.modal');
    const options = {};
    const instances = M.Modal.init(elems, options);
  }, [])
  const getAnswer = useCallback((event) => {

    event.preventDefault();
    const answer = event.target.answer.value;
    if (answer.toLowerCase() === question.question_answer.toLowerCase()) {
      setIsAnswered(false);
      setIsCorrect(true);

      dispatch({ type: 'EDIT_POINTS', payload: question.question_price })

    } else {
      setIsAnswered(false);
      setIsCorrect(false);
      dispatch({ type: 'EDIT_POINTS', payload: -question.question_price })

    }

    event.target.reset();
  }, [])
  
  return (
    <div>
      {isAnswered ? <a className={`waves-effect  waves-light btn modal-trigger ${styles.question}`}  onClick={openModal} href={`#modal${question.id}`}>{question.question_price} </a> :
        <a className="waves-effect  waves-light btn modal-trigger disabled" onClick={openModal} href={`#modal${question.id}`}>{question.question_price} </a>}
      <div id={`modal${question.id}`} className={`modal ${styles.modal}`} >
        <div className="modal-content">
          <h4>Тема: {topics.find((topic) => topic.id === question.topic_id).topic_name}</h4>
          <h3>{question.question_name}</h3>
          {isAnswered ?
            <form onSubmit={getAnswer}>
              <input autocomplete='off' id='answer' type="text" />
              <button type='submit' className="waves-effect waves-light btn-large">Ответить</button>
            </form> : isCorrect ?
              <div>Верно! Вы заработали {question.question_price} очков!</div> :
              <div>Не правильно! Правильный ответ: {question.question_answer}. Вы потеряли {question.question_price} очков!</div>
          }
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    </div>
  );
}

export default GameQuestions;
