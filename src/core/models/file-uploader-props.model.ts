export interface FileUploaderProps {
    isUploading: boolean;
    setIsUploading: (isUploading: boolean) => void;
    setUploadFiles: (file: File[]) => void;
};
