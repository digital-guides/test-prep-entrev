import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface ResultsScreenProps {
  score: number;
  maxScore: number;
  onRestart: () => void;
}

const ResultsScreen = ({ score, maxScore, onRestart }: ResultsScreenProps) => {
  const getResult = () => {
    if (score <= 5) {
      return {
        zone: "ZONA ROJA: Improvisación total",
        emoji: "🚨",
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-300",
        message: "Aún no estás listo para dar tu mejor impresión.",
        recommendation: "Te recomiendo repasar la Guía práctica de preparación para entrevistas exitosas y practicar tu presentación frente al espejo o grabándote."
      };
    } else if (score <= 10) {
      return {
        zone: "ZONA AMARILLA: Preparación parcial",
        emoji: "⚙️",
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-300",
        message: "Vas bien, pero aún hay margen para afinar detalles.",
        recommendation: "Concéntrate en tu lenguaje corporal, tono de voz y en estructurar tus ejemplos con claridad."
      };
    } else {
      return {
        zone: "ZONA VERDE: Preparación impecable",
        emoji: "🌟",
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-300",
        message: "¡Excelente! Tu nivel de preparación es alto y estratégico.",
        recommendation: "Sigue reforzando tu autenticidad y presencia profesional: estás listo para destacar."
      };
    }
  };

  const result = getResult();
  const percentage = (score / maxScore) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-soft">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-2xl animate-fade-in">
        <div className="text-center space-y-6">
          <div className={`text-7xl mb-4 animate-bounce`}>
            {result.emoji}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            ¡Resultados!
          </h1>

          {/* Score Display */}
          <div className="space-y-4 py-6">
            <div className="text-6xl font-bold text-primary">
              {score}/{maxScore}
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-6 bg-secondary rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ease-out ${
                  score <= 5 ? "bg-red-500" : score <= 10 ? "bg-yellow-500" : "bg-green-500"
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Result Card */}
          <Card className={`p-6 border-2 ${result.borderColor} ${result.bgColor}`}>
            <h2 className={`text-2xl font-bold mb-4 ${result.color}`}>
              {result.zone}
            </h2>
            <p className="text-lg text-foreground mb-4">
              {result.message}
            </p>
            <p className="text-base text-muted-foreground">
              {result.recommendation}
            </p>
          </Card>

          {/* Final Message */}
          <Card className="p-6 bg-primary text-primary-foreground">
            <p className="text-lg font-semibold mb-2">
              ✨ ¡Listo! Tu resultado refleja tu nivel actual de preparación.
            </p>
            <p className="text-sm opacity-90">
              Recuerda: cada entrevista es una oportunidad de crecimiento.
            </p>
            <p className="text-sm mt-2 opacity-90">
              💡 Tip: revisa tu Guía de preparación y vuelve a hacer este test antes de cada entrevista importante.
            </p>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-center pt-6">
            <Button
              onClick={onRestart}
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold"
            >
              <RefreshCw className="mr-2 w-5 h-5" />
              Repetir Test
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultsScreen;
