import { ToolResult, FileSystemAction } from './tools';
export type InterceptorCallback = () => Promise<string>;
export declare class AgentHarness {
    private isThreadLocked;
    executeAction(actionType: FileSystemAction, targetFile: string, requestApprovalHook: InterceptorCallback): Promise<ToolResult>;
}
//# sourceMappingURL=harness.d.ts.map