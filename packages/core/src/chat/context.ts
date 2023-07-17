export const UserContext: Map<string, { context: Context; info?: any }> = new Map();

export enum Context {
    INITIAL,
    TOOL_SELECT,
    QUESTION,
}
