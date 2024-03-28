import { createContext } from "react";
import { CoinClass } from "../models/CoinClass";

export interface ICoinContext {
  coinList: CoinClass[];
}

export const CoinContext = createContext<ICoinContext>({
  coinList: [],
});
