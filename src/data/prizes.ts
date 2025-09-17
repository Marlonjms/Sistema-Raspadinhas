import { Prize } from '../types/prizes';
import celularImg from '../assets/celular.png';
import computadorImg from '../assets/computador.png';
import dinheiroImg from '../assets/dinheiro.png';
import ingressosImg from '../assets/ingressos.png';
import giftcardImg from '../assets/giftcard.png';

export const PRIZES: Prize[] = [
  {
    id: 'celular',
    name: 'iPhone 15 Pro',
    image: celularImg,
    value: 'R$ 8.000',
    type: 'celular',
    probability: 0.05
  },
  {
    id: 'computador',
    name: 'MacBook Pro',
    image: computadorImg,
    value: 'R$ 15.000',
    type: 'computador',
    probability: 0.02
  },
  {
    id: 'dinheiro-alto',
    name: 'R$ 5.000',
    image: dinheiroImg,
    value: 'R$ 5.000',
    type: 'dinheiro',
    probability: 0.08
  },
  {
    id: 'dinheiro-medio',
    name: 'R$ 1.000',
    image: dinheiroImg,
    value: 'R$ 1.000',
    type: 'dinheiro',
    probability: 0.15
  },
  {
    id: 'ingressos',
    name: 'Show Exclusivo',
    image: ingressosImg,
    value: 'R$ 800',
    type: 'ingressos',
    probability: 0.20
  },
  {
    id: 'giftcard',
    name: 'Vale Compras',
    image: giftcardImg,
    value: 'R$ 500',
    type: 'giftcard',
    probability: 0.25
  }
];

// Função para sortear um prêmio baseado nas probabilidades
export function drawPrize(): Prize | null {
  const random = Math.random();
  let accumulated = 0;
  
  // 25% de chance de não ganhar nada
  if (random < 0.25) {
    return null;
  }
  
  for (const prize of PRIZES) {
    accumulated += prize.probability;
    if (random < accumulated + 0.25) { // +0.25 porque já excluímos os 25% de não ganhar
      return prize;
    }
  }
  
  return null;
}