import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


import React from 'react';

const ImageUpload = ({ imageChange, image_title }) => {

    const props = {
        name: 'file',
        customRequest({ file, onSuccess, onError }) {
            setTimeout(() => {
                const isJpgOrPng = file.type === 'application/octet-stream' || file.type === '';
                if (isJpgOrPng) {
                    message.error('You cannot upload such files!');
                    onError("error")
                    return;
                } else {
                    onSuccess('ok');
                }
            }, 0);
        },
        beforeUpload(file) {
            const isLt2M = file.size / 100024 / 100024 < 2;
            if (!isLt2M) {
                //  ccc = true;
                message.error('Image must smaller than 100MB!');
                // return;
            }
            //  SetFileSize(false);isJpgOrPng &&
            return isLt2M;
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
           //     console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
              //  console.log(info)
                imageChange(info)
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        progress: {
            strokeColor: {
                '0%': '#108ee9',
                '100%': '#87d068',
            },
            strokeWidth: 3,
            format: percent => `${parseFloat(percent.toFixed(2))}%`,
        },
    };
    return (
        <Upload {...props}>
            <Button> <UploadOutlined /> {image_title} </Button>
        </Upload>
    );
};

export default ImageUpload;