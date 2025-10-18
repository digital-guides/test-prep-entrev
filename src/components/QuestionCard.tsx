import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface Option {
  text: string;
  points: number;
}

interface QuestionCardProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  options: Option[];
  onAnswer: (points: number) => void;
}

const QuestionCard = ({
  questionNumber,
  totalQuestions,
  question,
  options,
  onAnswer,
}: QuestionCardProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const progress = (questionNumber / totalQuestions) * 100;

  const handleSubmit = () => {
    if (selectedValue !== "") {
      const points = parseInt(selectedValue);
      onAnswer(points);
      setSelectedValue("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-soft">
      <div className="max-w-2xl w-full space-y-6 animate-fade-in">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Pregunta {questionNumber} de {totalQuestions}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-accent transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 md:p-10 shadow-2xl">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold">
                {questionNumber}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary pt-1">
                {question}
              </h2>
            </div>

            <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
              <div className="space-y-3">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-accent ${
                      selectedValue === option.points.toString()
                        ? "border-accent bg-accent/5"
                        : "border-border"
                    }`}
                    onClick={() => setSelectedValue(option.points.toString())}
                  >
                    <RadioGroupItem value={option.points.toString()} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer text-base md:text-lg"
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <Button
              onClick={handleSubmit}
              disabled={selectedValue === ""}
              size="lg"
              className="w-full bg-gradient-accent hover:opacity-90 text-white font-semibold py-6 text-lg transition-all disabled:opacity-50"
            >
              {questionNumber === totalQuestions ? "Ver Resultados" : "Siguiente"}
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QuestionCard;
