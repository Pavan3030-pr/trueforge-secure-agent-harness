"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const harness_1 = require("./harness");
const tools_1 = require("./tools");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const harnessInstance = new harness_1.AgentHarness();
function displaySecurityAlertBanner() {
    return new Promise((resolve) => {
        console.log(`\n\x1b[1;31m`); // Bold Red Escape Color Sequence
        console.log(`╔════════════════════════════════════════════════════════════════╗`);
        console.log(`║ ⚠️  SECURITY AUDIT ALERT: CRITICAL PRIVILEGE REQUEST DETECTED   ║`);
        console.log(`╠════════════════════════════════════════════════════════════════╣`);
        console.log(`║ Action: File Deletion Mutation Intercepted                    ║`);
        console.log(`║ The TrueForge Harness has forced a Human-in-the-Loop lock.    ║`);
        console.log(`║                                                                ║`);
        console.log(`║ Action required: Type 'APPROVE' to run or 'DENY' to abort.     ║`);
        console.log(`╚════════════════════════════════════════════════════════════════╝`);
        console.log(`\x1b[0m`); // Reset formatting
        rl.question(`\x1b[1;33m[INPUT COMPLIANCE PROMPT] Enter Validation Command: \x1b[0m`, (inputSignal) => {
            resolve(inputSignal);
        });
    });
}
function launchInteractiveHarnessConsole() {
    console.clear();
    console.log(`\x1b[1;35m╔════════════════════════════════════════════════════════════════╗\x1b[0m`);
    console.log(`\x1b[1;35m║             === TRUEFORGE SECURE HARNESS INTERFACE ===         ║\x1b[0m`);
    console.log(`\x1b[1;35m╚════════════════════════════════════════════════════════════════╝\x1b[0m`);
    console.log(`\x1b[36m[SYSTEM READY]\x1b[0m Listening for system automation inputs...\n`);
    console.log(`\x1b[1mOptions to test deployment architecture:\x1b[0m`);
    console.log(`1. Trigger Low-Risk Task  (Simulate reading configuration strings)`);
    console.log(`2. Trigger High-Risk Task (Simulate deleting database objects)`);
    console.log(`3. Exit Environment`);
    rl.question(`\n\x1b[1mSelect test automation index (1-3): \x1b[0m`, async (choice) => {
        let action = 'READ_FILE';
        let fileTarget = 'production_kernel_config.json';
        if (choice === '2') {
            action = 'DELETE_FILE';
            fileTarget = 'sensitive_customer_database.db';
        }
        else if (choice === '3') {
            console.log(`\n\x1b[32m[SHUTDOWN]\x1b[0m Terminating live agent deployment environment safely.`);
            rl.close();
            process.exit(0);
        }
        try {
            const finalResult = await harnessInstance.executeAction(action, fileTarget, displaySecurityAlertBanner);
            console.log(`\n\x1b[1;32m[RESULT BADGE SUCCESS]\x1b[0m Operational confirmation payload returned:`);
            console.log(JSON.stringify(finalResult, null, 2));
        }
        catch (runtimeError) {
            console.log(`\n\x1b[1;31m[CRITICAL EXCEPTION HALT]\x1b[0m Engine caught safety restriction:`);
            console.log(`> \x1b[31m${runtimeError.message}\x1b[0m`);
        }
        rl.question(`\nPress Enter key to restart system console runtime loop...`, () => {
            launchInteractiveHarnessConsole();
        });
    });
}
launchInteractiveHarnessConsole();
//# sourceMappingURL=index.js.map