/**
 * Chemical X Protocol: Diagnostic Multi-Rule Validator
 * Evaluates business rule sets and identifies the exact failing rule key without nested branches.
 */
export interface RuleEvaluation<K extends string = string> {
    isValid: boolean;
    failingKey: K | null;
}
export declare const createRuleSet: <T, K extends string = string>(rules: Record<K, (item: T) => boolean>) => (item: T) => RuleEvaluation<K>;
export type RuleValue = boolean | (() => boolean);
export type RuleBranch = Record<string, RuleValue>;
export type RuleTreeInput = Record<string, RuleBranch>;
export interface RuleTreeResult<T extends RuleTreeInput> {
    ok: boolean;
    first: string | null;
    violations: string[];
    tree: {
        [K in keyof T]: {
            [P in keyof T[K]]: boolean;
        };
    };
}
export declare const ruleTree: <T extends RuleTreeInput>(input: T, options?: {
    failFast?: boolean;
}) => RuleTreeResult<T>;
export declare const evaluateRules: <K extends string = string>(rules: Record<K, RuleValue>, options?: {
    failFast?: boolean;
}) => {
    ok: boolean;
    first: K | null;
    violations: K[];
};
export declare const assertRuleTree: <T extends RuleTreeInput>(input: T, onFail?: (firstKey: string) => void) => boolean;
