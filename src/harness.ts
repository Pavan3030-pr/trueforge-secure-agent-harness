import { FileSystemTools, ToolResult, FileSystemAction } from './tools.js';

export type InterceptorCallback = () => Promise<string>;

export class AgentHarness {
    private isThreadLocked: boolean = false;

    public async executeAction(
        actionType: FileSystemAction, 
        targetFile: string, 
        requestApprovalHook: InterceptorCallback
    ): Promise<ToolResult> {
        
        console.log(`\x1b[32m[GATEWAY]\x1b[0m Routing active user request through TrueForge AI Gateway...`);
        console.log(`\x1b[34m[RUNTIME]\x1b[0m Simulating autonomous agent task execution cycle...`);

        if (actionType === 'DELETE_FILE') {
            if (this.isThreadLocked) {
                throw new Error('CONCURRENCY CONTROLLER REJECTION: Core runtime thread is currently locked by an ongoing security event.');
            }
            
            this.isThreadLocked = true;
            console.log(`\x1b[33m[SECURITY]\x1b[0m Critical action profile hit. Freezing execution thread framework natively.`);
            
            try {
                const userDecision = await requestApprovalHook();

                if (userDecision.trim().toUpperCase() !== 'APPROVE') {
                    throw new Error('OPERATIONAL SAFEGUARD SHUTDOWN: Execution session aborted by supervisor block.');
                }
                
                return await FileSystemTools.deleteFile(targetFile);
            } finally {
                this.isThreadLocked = false;
                console.log(`\x1b[32m[SECURITY]\x1b[0m Security barrier challenge verified successfully. Resuming safe loop.`);
            }
        }

        return await FileSystemTools.readFile(targetFile);
    }
}
