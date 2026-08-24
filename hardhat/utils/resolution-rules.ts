export type ResolutionRules = Readonly<{
  target: bigint;
  comparator: string;
  oracleUrl: string;
  jsonPath: string;
  resolveBlock: bigint;
}>;

export function createRules(
  target: bigint,
  comparator: string,
  oracleUrl: string,
  jsonPath: string,
  resolveBlock: bigint,
): ResolutionRules {
  if (target < 0n) {
    throw new Error(
      "target cannot be negative",
    );
  }

  if (oracleUrl.length === 0) {
    throw new Error(
      "oracle URL is required",
    );
  }

  if (jsonPath.length === 0) {
    throw new Error(
      "json path is required",
    );
  }

  return Object.freeze({
    target,
    comparator,
    oracleUrl,
    jsonPath,
    resolveBlock,
  });
}

export function describeRules(
  rules: ResolutionRules,
): string {
  return [
    `target=${rules.target}`,
    `comparator=${rules.comparator}`,
    `oracle=${rules.oracleUrl}`,
    `path=${rules.jsonPath}`,
    `resolveBlock=${rules.resolveBlock}`,
  ].join("\n");
}
