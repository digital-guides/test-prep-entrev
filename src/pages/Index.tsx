import { useState } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuestionCard from "@/components/QuestionCard";
import ResultsScreen from "@/components/ResultsScreen";

const questions = [
  {
    question: "¿Cuánto sabes sobre la empresa donde tendrás tu entrevista?",
    options: [
      { text: "No la he investigado aún.", points: 0 },
      { text: "Sé más o menos a qué se dedica.", points: 1 },
      { text: "Investigué su web, valores y proyectos recientes.", points: 2 },
    ],
  },
  {
    question: "¿Qué tan claro tienes tus fortalezas profesionales?",
    options: [
      { text: "No sabría cómo resumirlas.", points: 0 },
      { text: "Tengo una idea, pero me cuesta expresarlas.", points: 1 },
      { text: "Las tengo identificadas y puedo explicarlas con ejemplos.", points: 2 },
    ],
  },
  {
    question: '¿Has practicado tu presentación personal ("háblame de ti")?',
    options: [
      { text: "No, improviso.", points: 0 },
      { text: "Tengo una idea general, sin practicar.", points: 1 },
      { text: "Sí, la he ensayado y se siente natural.", points: 2 },
    ],
  },
  {
    question: "¿Cómo manejas los nervios antes de una entrevista?",
    options: [
      { text: "Siento ansiedad y me paralizo.", points: 0 },
      { text: "Intento calmarme sin método definido.", points: 1 },
      { text: "Practico técnicas de respiración o visualización.", points: 2 },
    ],
  },
  {
    question: "¿Qué tan alineada está tu imagen personal con el rol que buscas?",
    options: [
      { text: "No pienso mucho en eso.", points: 0 },
      { text: "Intento adaptarme al contexto.", points: 1 },
      { text: "Cuido mi vestimenta y proyección profesional.", points: 2 },
    ],
  },
  {
    question: "¿Qué tanto controlas tu lenguaje corporal?",
    options: [
      { text: "No presto atención a mis gestos o postura.", points: 0 },
      { text: "Soy consciente, pero me traicionan los nervios.", points: 1 },
      { text: "Mantengo contacto visual y postura abierta.", points: 2 },
    ],
  },
  {
    question: "¿Cómo respondes ante preguntas difíciles?",
    options: [
      { text: "Me bloqueo o contesto lo primero que pienso.", points: 0 },
      { text: "Me preparo para algunas preguntas comunes.", points: 1 },
      { text: "Practico respuestas con ejemplos reales.", points: 2 },
    ],
  },
  {
    question: "¿Qué haces después de una entrevista?",
    options: [
      { text: "Nada, espero la respuesta.", points: 0 },
      { text: "Agradezco verbalmente al entrevistador.", points: 1 },
      { text: "Envío un mensaje o correo de agradecimiento.", points: 2 },
    ],
  },
];

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<"welcome" | "questions" | "results">("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setCurrentScreen("questions");
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleAnswer = (points: number) => {
    const newScore = score + points;
    setScore(newScore);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentScreen("results");
    }
  };

  const handleRestart = () => {
    setCurrentScreen("welcome");
    setCurrentQuestion(0);
    setScore(0);
  };

  const maxScore = questions.length * 2; // Maximum 2 points per question

  return (
    <>
      {currentScreen === "welcome" && <WelcomeScreen onStart={handleStart} />}
      
      {currentScreen === "questions" && (
        <QuestionCard
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
        />
      )}
      
      {currentScreen === "results" && (
        <ResultsScreen
          score={score}
          maxScore={maxScore}
          onRestart={handleRestart}
        />
      )}
    </>
  );
};

export default Index;
