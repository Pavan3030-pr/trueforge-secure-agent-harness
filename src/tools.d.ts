export interface ToolResult {
    success: boolean;
    data: string;
    timestamp: string;
}
export type FileSystemAction = 'READ_FILE' | 'DELETE_FILE';
export declare class FileSystemTools {
    static readFile(filename: string): Promise<ToolResult>;
    static deleteFile(filename: string): Promise<ToolResult>;
}
//# sourceMappingURL=tools.d.ts.map