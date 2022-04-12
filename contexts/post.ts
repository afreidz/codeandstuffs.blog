import { like } from "@prisma/client";
import { createContext } from "react";

export interface PostState {
  post?: string;
  setPost?: Function;
  likes?: Array<like>;
  setLikes?: Function;
}

const defaultState: PostState = {};

export default createContext(defaultState);
