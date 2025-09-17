import { useState, useRef, useEffect } from 'react';
import { Prize, ScratchResult } from '../types/prizes';
import { PRIZES } from '../data/prizes';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

interface ScratchCardProps {
  onResult: (result: ScratchResult) => void;
}

interface ScratchSquare {
  id: number;
  prize: Prize;
  revealed: boolean;
  isScratching: boolean;
}

export function ScratchCard({ onResult }: ScratchCardProps) {
  const [squares, setSquares] = useState<ScratchSquare[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [matchedSquares, setMatchedSquares] = useState<number[]>([]);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    canvasRefs.current.forEach((canvas, index) => {
      if (canvas && squares[index]) {
        initCanvas(canvas, index);
      }
    });
  }, [squares]);

  const initializeGame = () => {
    const newSquares: ScratchSquare[] = [];

    const willWin = Math.random() < 0.3;

    if (willWin) {
      const winningPrize = PRIZES[Math.floor(Math.random() * PRIZES.length)];
      const winningPositions = [0, 1, 2];

      for (let i = 0; i < 9; i++) {
        if (winningPositions.includes(i)) {
          newSquares.push({
            id: i,
            prize: winningPrize,
            revealed: false,
            isScratching: false
          });
        } else {
          let differentPrize;
          do {
            differentPrize = PRIZES[Math.floor(Math.random() * PRIZES.length)];
          } while (differentPrize.id === winningPrize.id);

          newSquares.push({
            id: i,
            prize: differentPrize,
            revealed: false,
            isScratching: false
          });
        }
      }

      // embaralha
      for (let i = newSquares.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newSquares[i], newSquares[j]] = [newSquares[j], newSquares[i]];
        newSquares[i].id = i;
        newSquares[j].id = j;
      }
    } else {
      const usedPrizes = new Map<string, number>();
      for (let i = 0; i < 9; i++) {
        let prize;
        let attempts = 0;
        do {
          prize = PRIZES[Math.floor(Math.random() * PRIZES.length)];
          attempts++;
        } while ((usedPrizes.get(prize.id) || 0) >= 2 && attempts < 10);

        usedPrizes.set(prize.id, (usedPrizes.get(prize.id) || 0) + 1);
        newSquares.push({
          id: i,
          prize,
          revealed: false,
          isScratching: false
        });
      }
    }

    setSquares(newSquares);
    setGameStarted(false);
    setGameEnded(false);
    setMatchedSquares([]);

    // Reset canvas
    canvasRefs.current.forEach(canvas => {
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#2c2c2c';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
    });
  };

  const initCanvas = (canvas: HTMLCanvasElement, index: number) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 200;
    canvas.height = 200;

    ctx.fillStyle = '#3c3c3c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#2a2a2a';
    for (let i = 0; i < canvas.width; i += 20) {
      for (let j = 0; j < canvas.height; j += 20) {
        if ((i + j) % 40 === 0) {
          ctx.fillRect(i, j, 10, 10);
        }
      }
    }

    ctx.globalCompositeOperation = 'destination-out';
  };

  const handleMouseDown = (index: number) => {
    if (!gameStarted || gameEnded) return;
    setSquares(prev => prev.map(s => s.id === index ? { ...s, isScratching: true } : s));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>, index: number) => {
    const square = squares[index];
    if (!square?.isScratching || gameEnded) return;

    const canvas = canvasRefs.current[index];
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();

    checkScratchProgress(canvas, index);
  };

  const handleMouseUp = (index: number) => {
    setSquares(prev => prev.map(s => s.id === index ? { ...s, isScratching: false } : s));
  };

  const checkScratchProgress = (canvas: HTMLCanvasElement, index: number) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentPixels = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparentPixels++;
    }

    const scratchedPercentage = transparentPixels / (canvas.width * canvas.height);
    if (scratchedPercentage > 0.3 && !squares[index].revealed) {
      revealSquare(index);
    }
  };

  const revealSquare = (index: number) => {
    setSquares(prev => prev.map(s => s.id === index ? { ...s, revealed: true } : s));
    checkForWin();
  };

  const checkForWin = () => {
    const revealedSquares = squares.filter(s => s.revealed);
    if (revealedSquares.length < 3) return;

    const prizeGroups = revealedSquares.reduce((groups, s) => {
      const key = s.prize.id;
      if (!groups[key]) groups[key] = [];
      groups[key].push(s);
      return groups;
    }, {} as Record<string, ScratchSquare[]>);

    for (const group of Object.values(prizeGroups)) {
      if (group.length >= 3) {
        const matchedPositions = group.slice(0, 3).map(s => s.id);
        setMatchedSquares(matchedPositions);
        setGameEnded(true);

        toast.success(`🎉 Você ganhou: ${group[0].prize.name}!`);
        onResult({ won: true, prize: group[0].prize, matchedPositions });
        return;
      }
    }

    if (revealedSquares.length === 9) {
      setGameEnded(true);
      toast.error("😔 Que pena! Tente novamente!");
      onResult({ won: false });
    }
  };

  const startGame = () => {
    setGameStarted(true);
    toast.info("Raspe os quadrados para revelar os prêmios!");
  };

  return (
    <Card className="p-6 bg-[hsl(217,41%,9%)] border border-gray-800 rounded-xl shadow-md mt-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-yellow-400 mb-2">Raspadinha Premium</h2>
        <p className="text-sm text-gray-400">Encontre 3 símbolos iguais nos 9 quadrados e ganhe prêmios incríveis!</p>
      </div>

      {!gameStarted ? (
        <div className="text-center">
          <Button 
            onClick={startGame}
            size="lg"
            className="bg-lime-500 hover:bg-lime-600 text-black font-bold  rounded-md px-6 py-3 shadow-glow"
          >
            Começar Jogo
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto">
          {squares.map((square, index) => (
            <div 
              key={square.id} 
              className={`relative aspect-square border-2 rounded-lg overflow-hidden ${
                matchedSquares.includes(square.id) ? 'border-lime-400 shadow-glow' : 'border-gray-700'
              }`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1f1f1f]">
                <img src={square.prize.image} alt={square.prize.name} className="w-12 h-12 mb-1 object-contain" />
                <p className="text-xs font-semibold text-white">{square.prize.name}</p>
                <p className="text-xs text-gray-400">{square.prize.value}</p>
              </div>

              {!square.revealed && (
                <canvas
                  ref={el => canvasRefs.current[index] = el}
                  className="absolute inset-0 cursor-crosshair"
                  onMouseDown={() => handleMouseDown(index)}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseUp={() => handleMouseUp(index)}
                  onMouseLeave={() => handleMouseUp(index)}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {gameEnded && (
        <div className="text-center mt-6">
          <Button onClick={initializeGame} variant="outline" size="lg">
            Jogar Novamente
          </Button>
        </div>
      )}
    </Card>
  );
}
