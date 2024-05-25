import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Upload, UploadFile, UploadProps } from 'antd';

type FileType = Parameters<NonNullable<UploadProps['beforeUpload']>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const PhotoUpload: React.FC<{ file: UploadFile | null, setFile: (file: UploadFile | null) => void }> = ({ file, setFile }) => {

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }
    };

    const handleChange: UploadProps['onChange'] = ({ fileList }) => {
        if (fileList.length > 1) {
            fileList.shift();
        }
        setFile(fileList[0] || null);
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload Recipes Photo</div>
        </div>
    );

    return (
        <Upload
            listType="picture-card"
            fileList={file ? [file] : []}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={() => false} // Prevent automatic upload
        >
            {file ? null : uploadButton}
        </Upload>
    );
};

export default PhotoUpload;
