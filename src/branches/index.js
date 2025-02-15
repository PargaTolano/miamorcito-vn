import { prepareBranches } from "react-visual-novel";
import { BranchPatio } from "./BranchPatio";
import { BranchArrendadora } from "./BranchArrendadora";
import { BranchCryCat } from "./BranchCryCat";
import { BranchSadHamster } from "./BranchSadHamster";
import { BranchHappyEnding } from "./BranchHappyEnding";


export const branches = prepareBranches({
  BranchArrendadora,
  BranchPatio,
  BranchCryCat,
  BranchSadHamster,
  BranchHappyEnding
});
