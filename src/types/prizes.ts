export interface Prize {
  id: string;
  name: string;
  image: string;
  value: string;
  type: 'celular' | 'computador' | 'dinheiro' | 'ingressos' | 'giftcard';
  probability: number;
}

export interface ScratchResult {
  won: boolean;
  prize?: Prize;
  matchedPositions?: number[];
}

export interface RecentWin {
  id: string;
  playerName: string;
  prize: Prize;
  timestamp: Date;
}