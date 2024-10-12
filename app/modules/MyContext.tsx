import { createContext } from 'react';

interface MyContextType {
  number_of_players: number;
  quesitos_one: number[];
  quesitos_two: number[];
  quesitos_three: number[];
  quesitos_four: number[];
  quesitos_five: number[];
  quesitos_six: number[];
  quesitos_seven: number[];
  quesitos_eight: number[];
  category_red: string;
  category_green: string;
  category_pink: string;
  category_blue: string;
  category_purple: string;
  category_yellow: string;
  setNumberOfPlayers: (num: number) => void;
  setQuesitosOne: (quesitos: number[]) => void;
  setQuesitosTwo: (quesitos: number[]) => void;
  setQuesitosThree: (quesitos: number[]) => void;
  setQuesitosFour: (quesitos: number[]) => void;
  setQuesitosFive: (quesitos: number[]) => void;
  setQuesitosSix: (quesitos: number[]) => void;
  setQuesitosSeven: (quesitos: number[]) => void;
  setQuesitosEight: (quesitos: number[]) => void;
  setCategoryRed: (category: string) => void;
  setCategoryGreen: (category: string) => void;
  setCategoryPink: (category: string) => void;
  setCategoryBlue: (category: string) => void;
  setCategoryPurple: (category: string) => void;
  setCategoryYellow: (category: string) => void;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);