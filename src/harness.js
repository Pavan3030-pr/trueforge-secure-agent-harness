"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentHarness = void 0;
const tools_1 = require("./tools");
class AgentHarness {
    isThreadLocked = false;
    async executeAction(actionType, targetFile, requestApprovalHook) {
        console.log(`\x1b[32m[GATEWAY]\x1b[0m Routing active user request through TrueForge AI Gateway...`);
        console.log(`\x1b[34m[RUNTIME]\x1b[0m Simulating autonomous agent task execution cycle...`);
        if (actionType === 'DELETE_FILE') {
            this.isThreadLocked = true;
            console.log(`\x1b[33m[SECURITY]\x1b[0m Critical action profile hit. Freezing execution thread framework natively.`);
            const userDecision = await requestApprovalHook();
            if (userDecision.trim().toUpperCase() !== 'APPROVE') {
                this.isThreadLocked = false;
                throw new Error('OPERATIONAL SAFEGUARD SHUTDOWN: Execution session aborted by supervisor block.');
            }
            this.isThreadLocked = false;
            console.log(`\x1b[32m[SECURITY]\x1b[0m Security barrier challenge verified successfully. Resuming safe loop.`);
            return await tools_1.FileSystemTools.deleteFile(targetFile);
        }
        return await tools_1.FileSystemTools.readFile(targetFile);
    }
}
exports.AgentHarness = AgentHarness;
//# sourceMappingURL=harness.js.map