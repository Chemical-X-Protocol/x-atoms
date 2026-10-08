/**
 * Chemical X Protocol: Diagnostic Multi-Rule Validator
 * Evaluates business rule sets and identifies the exact failing rule key without nested branches.
 */

export interface RuleEvaluation<K extends string = string> {
  isValid: boolean;
  failingKey: K | null;
}

export const createRuleSet = <T, K extends string = string>(rules: Record<K, (item: T) => boolean>) => {
  const entries = Object.entries(rules) as Array<[K, (item: T) => boolean]>;

  return (item: T): RuleEvaluation<K> => {
    for (const [key, predicate] of entries) {
      if (!predicate(item)) {
        return { isValid: false, failingKey: key };
      }
    }
    return { isValid: true, failingKey: null };
  };
};
