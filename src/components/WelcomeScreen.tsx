import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-soft">
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-2xl animate-fade-in">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            🧠 ¿Qué tan preparado estás para tu entrevista laboral?
          </h1>
          
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              Descubre en pocos minutos qué tan preparado estás para brillar en tu próxima entrevista.
            </p>
            <p>
              Responde con sinceridad y obtén tu diagnóstico inmediato para reforzar tu confianza profesional.
            </p>
          </div>

          <div className="pt-6">
            <Button 
              size="lg" 
              onClick={onStart}
              className="bg-gradient-accent hover:opacity-90 text-white font-semibold px-8 py-6 text-lg transition-all"
            >
              Comenzar Test
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            ⏱️ Tiempo estimado: 3-5 minutos
          </p>
        </div>
      </Card>
    </div>
  );
};

export default WelcomeScreen;
