import {
  createRules,
  describeRules,
} from "../utils/resolution-rules";

const rules = createRules(
  4000n,
  ">=",
  "https://example.com/eth",
  "$.price",
  10000n,
);

console.log(
  "Resolution Rule Set",
);

console.log(
  "====================",
);

console.log(
  describeRules(rules),
);

console.log("");

console.log(
  "The rule set is intended to be fixed",
  "after market creation.",
);

console.log(
  "target:",
  rules.target.toString(),
);

console.log(
  "resolve block:",
  rules.resolveBlock.toString(),
);
