import * as readline from 'readline';
import { AgentHarness } from './harness.js';

const harness = new AgentHarness();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const displayMenuBanner = (): void => {
    console.log(`\n\x1b[1;35m════════════════════════════════════════════════════════════════╗\x1b[0m`);
    console.log(`\x1b[1;35m║             === TRUEFORGE SECURE HARNESS INTERFACE ===         ║\x1b[0m`);
    console.log(`\x1b[1;35m╚════════════════════════════════════════════════════════════════╝\x1b[0m`);
    console.log(`\x1b[32m[SYSTEM READY]\x1b[0m Listening for system automation inputs...\n`);
    console.log(`Options to test deployment architecture:`);
    console.log(`1. Trigger Low-Risk Task  (Simulate reading configuration strings)`);
    console.log(`2. Trigger High-Risk Task (Simulate deleting database objects)`);
    console.log(`3. Exit Environment`);
};

const runHumanApprovalGate = async (): Promise<string> => {
    return new Promise((resolve) => {
        console.log(`\n\x1b[1;31m╔════════════════════════════════════════════════════════════════╗\x1b[0m`);
        console.log(`\x1b[1;31m║ ⚠️  SECURITY AUDIT ALERT: CRITICAL PRIVILEGE REQUEST DETECTED   ║\x1b[0m`);
        console.log(`\x1b[1;31m╠════════════════════════════════════════════════════════════════╣\x1b[0m`);
        console.log(`\x1b[1;31m║ Action: File Deletion Mutation Intercepted                    ║\x1b[0m`);
        console.log(`\x1b[1;31m║ The TrueForge Harness has forced a Human-in-the-Loop lock.    ║\x1b[0m`);
        console.log(`\x1b[1;31m║                                                                ║\x1b[0m`);
        console.log(`\x1b[1;31m║ Action required: Type 'APPROVE' to run or 'DENY' to abort.     ║\x1b[0m`);
        console.log(`\x1b[1;31m╚════════════════════════════════════════════════════════════════╝\x1b[0m\n`);
        
        rl.question(`\x1b[1;33m[INPUT COMPLIANCE PROMPT] Enter Validation Command: \x1b[0m`, (inputSignal: string) => {
            resolve(inputSignal);
        });
    });
};

const handleSystemLoop = (): void => {
    displayMenuBanner();
    
    rl.question(`\n\x1b[1mSelect test automation index (1-3): \x1b[0m`, async (choice: string) => {
        const actionIdx = choice.trim();
        
        if (actionIdx === '1') {
            const result = await harness.executeAction('READ_FILE', 'production_kernel_config.json', runHumanApprovalGate);
            console.log(`\n\x1b[1;32m[RESULT BADGE SUCCESS]\x1b[0m Operational confirmation payload returned:\n`, JSON.stringify(result, null, 2));
            rl.question(`\nPress Enter key to restart system console runtime loop...`, () => handleSystemLoop());
        } else if (actionIdx === '2') {
            try {
                const result = await harness.executeAction('DELETE_FILE', 'sensitive_customer_database.db', runHumanApprovalGate);
                console.log(`\n\x1b[1;32m[RESULT BADGE SUCCESS]\x1b[0m Operational confirmation payload returned:\n`, JSON.stringify(result, null, 2));
            } catch (err: any) {
                console.log(`\n\x1b[1;31m[SECURITY BLOCK REJECTION]\x1b[0m ${err.message}`);
            }
            rl.question(`\nPress Enter key to restart system console runtime loop...`, () => handleSystemLoop());
        } else if (actionIdx === '3') {
            console.log(`\n\x1b[1;31m[SHUTDOWN]\x1b[0m Terminating live agent deployment environment safely.`);
            rl.close();
            process.exit(0);
        } else {
            console.log(`\x1b[31m[ERROR]\x1b[0m Invalid test index chosen. Please select 1, 2, or 3.`);
            handleSystemLoop();
        }
    });
};

handleSystemLoop();
