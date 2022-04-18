import { createContext } from "react";

export interface AppState {
  post?: string;
  setPost?: Function;
  fingerprint?: string;
  setFingerprint?: Function;
}

const defaultState: AppState = {};

export default createContext(defaultState);
