/**
 * Chemical X Protocol: Diagnostic Multi-Rule Validator
 * Evaluates business rule sets and identifies the exact failing rule key without nested branches.
 */
export interface RuleEvaluation<K extends string = string> {
    isValid: boolean;
    failingKey: K | null;
}
export declare const createRuleSet: <T, K extends string = string>(rules: Record<K, (item: T) => boolean>) => (item: T) => RuleEvaluation<K>;
