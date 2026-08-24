import { expect } from "chai";

import {
  createRules,
  describeRules,
} from "../utils/resolution-rules";

describe("Resolution rules", function () {
  function rules() {
    return createRules(
      4000n,
      ">=",
      "https://example.com/price",
      "$.price",
      5000n,
    );
  }

  it("stores the target", function () {
    expect(
      rules().target,
    ).to.equal(4000n);
  });

  it("stores the comparator", function () {
    expect(
      rules().comparator,
    ).to.equal(">=");
  });

  it("stores the oracle URL", function () {
    expect(
      rules().oracleUrl,
    ).to.equal(
      "https://example.com/price",
    );
  });

  it("stores the JSON path", function () {
    expect(
      rules().jsonPath,
    ).to.equal("$.price");
  });

  it("stores the resolve block", function () {
    expect(
      rules().resolveBlock,
    ).to.equal(5000n);
  });

  it("rejects a negative target", function () {
    expect(() =>
      createRules(
        -1n,
        ">=",
        "https://example.com",
        "$.price",
        5000n,
      ),
    ).to.throw();
  });

  it("rejects an empty URL", function () {
    expect(() =>
      createRules(
        4000n,
        ">=",
        "",
        "$.price",
        5000n,
      ),
    ).to.throw();
  });

  it("can describe the complete rule set", function () {
    expect(
      describeRules(rules()),
    ).to.contain("target=4000");
  });
});
