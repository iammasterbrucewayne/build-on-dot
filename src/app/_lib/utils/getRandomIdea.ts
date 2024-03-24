import { random } from "lodash";
import { Idea } from "../types/ideas";

import { ideas as _ideas } from "../constants/placeholderIdeas";

export const getRandomIdea = (ideas?: Idea[]) => {
  if (!ideas) {
    ideas = _ideas;
  }
  return ideas[random(1, ideas.length - 1)].slug;
};
