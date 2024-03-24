import { createContext } from "react";
import { Idea } from "../types/ideas";

const IdeasContext = createContext<Idea[] | null>(null);

export default IdeasContext;
