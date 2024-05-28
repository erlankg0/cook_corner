import React from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Upload, UploadFile, UploadProps} from 'antd';
import {RcFile} from "antd/lib/upload";

type FileType = Parameters<NonNullable<UploadProps['beforeUpload']>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const PhotoUpload: React.FC<{ file: RcFile | null, setFile: (file: RcFile | null) => void }> = ({ file, setFile }) => {

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }
    };

    const handleChange: UploadProps['onChange'] = (info) => {
        const fileList = [...info.fileList];

        // Убедимся, что загружено только одно изображение
        fileList.splice(-1, fileList.length - 1);

        setFile(fileList.length > 0 ? fileList[0].originFileObj as RcFile : null);
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
            fileList={file ? [{ ...file, uid: '-1', status: 'done' }] : []}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={() => false} // Prevent automatic upload
        >
            {file ? null : uploadButton}
        </Upload>
    );
};

export default PhotoUpload;
