import { useEffect, useReducer } from 'react';
import './App.css';
import Error from './components/Error';
import FinishScreen from './components/FinishScreen';
import Header from './components/Header';
import Loader from './components/Loader';
import MainSection from './components/MainSection';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import Question from './components/Question';
import StartScreen from './components/StartScreen';
import Timer from './components/Timer';

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  const question = state.questions.at(state.index);

  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
        secondsRemaining: action.payload.length * 25,
      };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'start':
      return { ...state, status: 'active' };
    case 'newAnswer':
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question?.correctOption
            ? state.points + question.points
            : state.points,
      };
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 1 ? 'finished' : state.status,
      };
    case 'finish':
      return { ...state, status: 'finished' };
    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
        secondsRemaining: state.questions.length * 25,
      };
    default:
      throw new Error('Action is unknown');
  }
}

function App() {
  const [{ questions, status, index, answer, points, secondsRemaining }, dispatch] =
    useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (sum, question) => sum + question.points,
    0
  );

  useEffect(function () {
    fetch(`http://localhost:9000/questions`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch questions');
        return res.json();
      })
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch(() => dispatch({ type: 'dataFailed' }));
  }, []);

  useEffect(
    function () {
      if (status !== 'active') return;

      const id = setInterval(function () {
        dispatch({ type: 'tick' });
      }, 1000);

      return () => clearInterval(id);
    },
    [status]
  );

  return (
    <div className="app">
      <Header />

      <MainSection>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Timer secondsRemaining={secondsRemaining} />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <div className="quiz-actions">
              <Timer secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </div>
          </>
        )}
        {status === 'finished' && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            dispatch={dispatch}
          />
        )}
      </MainSection>
    </div>
  );
}

export default App;
