import React, {useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import type {GetProp, UploadFile, UploadProps} from 'antd';
import {Upload} from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const App: React.FC = () => {
    const [file, setFile] = useState<UploadFile | null>(null);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }
    };

    const handleChange: UploadProps['onChange'] = ({ fileList }) => {
        // Ensure only one file is added
        if (fileList.length > 1) {
            fileList.shift(); // Remove the extra files
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
        <>
            <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-card"
                fileList={file ? [file] : []}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {file ? null : uploadButton}
            </Upload>
        </>
    );
};

export default App;