import { createContext } from "react";

export interface AppState {
  fingerprint?: string;
  setFingerprint?: Function;
}

const defaultState: AppState = {};

export default createContext(defaultState);
