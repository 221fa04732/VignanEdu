import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import {LightDarkModeAtom} from '../Atoms/LightDarkModeAtom'
import {AssessmentDescAtom} from '../Atoms/AssessmentDescAtom'
import { LoginStatusAtom } from '../Atoms/LoginStatusAtom';
import { LoginTypeAtom } from '../Atoms/LoginTypeAtom';


export default function Assessment7(){
const [lightdarkvalue, setlightdarkmode] = useRecoilState(LightDarkModeAtom)
const [assessment, setassessment] = useRecoilState(AssessmentDescAtom)
const [loginstatus, setloginstatus] = useRecoilState(LoginStatusAtom)
const [logintype, setlogintype] = useRecoilState(LoginTypeAtom)



const questions = [
  {
    numb: 1,
    question: "Which of the following is used to create a server socket in Java?",
    answer: "ServerSocket",
    options: [
      "Socket",
      "Server",
      "ServerSocket",
      "SocketServer"
    ]
},
{
    numb: 2,
    question: "What is the main purpose of Java Servlets?",
    answer: "To handle client requests and generate dynamic content on the server",
    options: [
      "To connect to databases",
      "To create GUIs",
      "To handle client requests and generate dynamic content on the server",
      "To handle file I/O"
    ]
},
{
    numb: 3,
    question: "Which method is called only once in a servlet lifecycle?",
    answer: "init()",
    options: [
      "service()",
      "destroy()",
      "doGet()",
      "init()"
    ]
},
{
    numb: 4,
    question: "What is the use of JDBC in Java?",
    answer: "To connect and execute queries with a database",
    options: [
      "To design user interfaces",
      "To create web pages",
      "To connect and execute queries with a database",
      "To handle network operations"
    ]
},
{
    numb: 5,
    question: "In JSP, what does JSP stand for?",
    answer: "Java Server Pages",
    options: [
      "Java Servlet Program",
      "Java Source Pages",
      "Java Standard Pages",
      "Java Server Pages"
    ]
}

];

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const startQuiz = () => {
    if(loginstatus === 0){
      alert("Please login to start the quiz")
      return
    }
    else{
      setQuizStarted(true)
      setassessment(prev => ({
        ...prev,
        assessment7: 1
      }));
    }
  };
  
  const restartQuiz = () => {
    setassessment(prev => ({
      ...prev,
      assessment7: 0
  }));
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const checkAnswer = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className={`m-10 border-l-2 border-b-2 rounded-2xl border-blue-400 font-quick h-myh1  flex flex-col items-center justify-center ${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} ${lightdarkvalue === 1 ? 'text-gray-400' : 'text-black'}`}>
        
    <div className={`mb-10 w-full flex justify-evenly ${assessment.assessment7 === 0 ? 'block' : 'hidden'}`}>
        <h1 className='text-3xl text-blue-400 font-semibold'>AJP</h1>
        <button className={logintype === 1 || logintype === 2 ? 'block' : 'hidden'}><img className='max-h-8 max-w-8' src="delete.png"/></button> 
      </div>
      {!quizStarted ? (
        <div className="start_btn bg-white p-6 rounded-lg shadow-lg text-center">
          <button onClick={startQuiz}
            className="text-2xl font-medium text-blue-500 px-8 py-4 bg-white rounded-lg shadow-md hover:bg-gray-100"
          >
            Start Quiz
          </button>
        </div>
      ) : showResult ? (
        <div className="result_box bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <div className="text-4xl text-blue-500 mb-5">&#10004;</div>
          <p className="text-xl font-medium mb-4">Quiz Completed!</p>
          <p className="text-lg mb-4">
            You scored <span className="font-semibold">{score}</span> out of{" "}
            <span className="font-semibold">{questions.length}</span>
          </p>
          <div className="buttons flex space-x-4">
            <button
              onClick={restartQuiz}
              className="px-6 py-2 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Restart
            </button>
            <button
              onClick={() =>{
                setQuizStarted(false)
                setassessment(prev => ({
                  ...prev,
                  assessment7: 0
              }));
              } }
              className="px-6 py-2 text-lg text-blue-500 bg-white rounded-lg border border-blue-500 hover:bg-blue-100"
            >
              Quit
            </button>
          </div>
        </div>
      ) : (
        <div className={`quiz_box w-full max-w-md p-6 rounded-lg shadow-lg  ${lightdarkvalue === 1 ? 'bg-stone-900' : 'bg-white'} border-2 ${lightdarkvalue === 1 ? 'border-white' : 'border-black'}`}>
          <header className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-medium">Quiz</h2>
            <div className="timer flex items-center space-x-2">
              <span className="text-blue-700 font-medium">Time Left:</span>
              <span className="bg-gray-800 text-white px-3 py-1 rounded-md">10</span>
            </div>
          </header>
          <section>
            <div className="que_text text-lg font-medium mb-6">
              {questions[currentQuestion].question}
            </div>
            <div className="option_list space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className="option bg-blue-100 text-blue-900 p-3 rounded-lg hover:bg-blue-200 cursor-pointer"
                  onClick={() => checkAnswer(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </section>
          <footer className="mt-6 flex justify-between items-center">
            <div className="total_que text-gray-700">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            <button
              onClick={() => checkAnswer(null)}
              className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Skip
            </button>
          </footer>
        </div>
      )}
    </div>
  );
}