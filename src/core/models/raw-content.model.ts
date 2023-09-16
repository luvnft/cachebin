export interface RawContent {
    isFile: boolean;
    language: string;
    timestamp: string;
    files: {
        content: string | ArrayBuffer;
        type: string;
        name: string;
    }[];
};
