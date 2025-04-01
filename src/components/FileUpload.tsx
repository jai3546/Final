import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, AlertCircle, CheckCircle2 } from 'lucide-react';

interface FileUploadProps {
  onFileAccepted: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileAccepted }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    
    if (!file) return;
    
    if (file.size > 25 * 1024 * 1024) { // 25MB limit
      setError('File size must be less than 25MB');
      return;
    }

    if (!['application/pdf', 'text/plain'].includes(file.type)) {
      setError('Only PDF and TXT files are allowed');
      return;
    }

    setError(null);
    setSuccess(false);
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setSuccess(true);
        onFileAccepted(file);
      }
    }, 100);
  }, [onFileAccepted]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt']
    },
    maxFiles: 1
  });

  return (
    <div className="w-full max-w-xl mx-auto">
      <div
        {...getRootProps()}
        className={`
          relative overflow-hidden
          border-2 border-[#7DF9FF] rounded-xl
          bg-gray-800/50 backdrop-blur-sm
          p-8 cursor-pointer
          transition-all duration-300
          ${isDragActive ? 'border-opacity-100 scale-102' : 'border-opacity-50 hover:border-opacity-100'}
          ${error ? 'border-red-500' : ''}
          ${success ? 'border-green-500' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center justify-center gap-4">
          <Upload 
            className={`
              w-12 h-12
              ${isDragActive ? 'text-[#7DF9FF]' : 'text-gray-400'}
              animate-float
            `}
          />
          
          <div className="text-center">
            <p className="text-lg font-semibold text-white mb-2">
              {isDragActive ? 'Drop your file here' : 'Drag & Drop your PDF or Notes'}
            </p>
            <p className="text-sm text-gray-400">
              or click to browse (max 25MB)
            </p>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-500 mt-2">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 text-green-500 mt-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>File uploaded successfully!</span>
            </div>
          )}
        </div>

        {/* Progress bar */}
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
            <div
              className="h-full bg-[#7DF9FF] transition-all duration-200"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;