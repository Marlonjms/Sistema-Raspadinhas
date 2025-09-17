import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Prize, RecentWin } from '../types/prizes';
import { PRIZES } from '../data/prizes';

// Dados simulados de ganhos recentes
const generateMockWins = (): RecentWin[] => {
  const mockNames = [
    'João S.', 'Maria P.', 'Pedro L.', 'Ana C.', 'Carlos M.',
    'Luiza F.', 'Rafael T.', 'Fernanda B.', 'Lucas R.', 'Beatriz O.'
  ];

  return Array.from({ length: 20 }, (_, i) => ({
    id: `win-${i}`,
    playerName: mockNames[Math.floor(Math.random() * mockNames.length)],
    prize: PRIZES[Math.floor(Math.random() * PRIZES.length)],
    timestamp: new Date(Date.now() - Math.random() * 86400000 * 7) // Últimos 7 dias
  }));
};

export function RecentWinsCarousel() {
  const [wins, setWins] = useState<RecentWin[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setWins(generateMockWins());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= wins.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [wins.length]);

  if (wins.length === 0) return null;

  const visibleWins = [
    wins[currentIndex],
    wins[(currentIndex + 1) % wins.length],
    wins[(currentIndex + 2) % wins.length]
  ];

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-6 text-center">
        🎉 Ganhadores Recentes
      </h3>
      
      <div className="relative overflow-hidden">
        <div className="flex space-x-4 justify-center">
          {visibleWins.map((win, index) => (
            <Card 
              key={`${win.id}-${currentIndex}-${index}`}
              className={`flex-shrink-0 p-4 bg-gradient-to-r from-success/5 to-primary/5 border-success/20 transition-all duration-500 ${
                index === 1 ? 'scale-105 shadow-glow' : 'scale-95 opacity-75'
              }`}
              style={{ width: '280px' }}
            >
              <div className="flex items-center space-x-3">
                <img 
                  src={win.prize.image} 
                  alt={win.prize.name}
                  className="w-12 h-12 object-contain"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">
                    {win.playerName}
                  </p>
                  <p className="text-sm text-success font-semibold">
                    Ganhou: {win.prize.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {win.prize.value} • {formatTimeAgo(win.timestamp)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Indicadores */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.min(wins.length, 10) }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex % 10
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'agora mesmo';
  if (diffInMinutes < 60) return `${diffInMinutes}min atrás`;
  
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h atrás`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}d atrás`;
}