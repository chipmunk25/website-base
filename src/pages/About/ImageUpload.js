import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


import React from 'react';

const ImageUpload = ({ imageChange, image_title }) => {

    const props = {
        name: 'file',
        customRequest({ file, onSuccess ,onError}) {
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
           
            /*    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
               const isAudio = file.type === 'audio/mpeg' || file.type === 'audio/mp3' || file.type === 'audio/m4a' || file.type === 'audio/wav';
               const isDoc = file.type === 'application/pdf' || file.type === 'application/vnd.ms-excel' || file.type === 'document/doc' || file.type === 'application/docx' || file.type === 'document/ppt' || file.type === 'document/pptx' || file.type === 'application/xls' || file.type === 'application/xlsx';
               const isVideo = file.type === 'video/mp4' || file.type === 'video/m4v' || file.type === 'video/mpg' || file.type === 'video/wmv' || file.type === 'video/mov' || file.type === 'video/avi' || file.type === 'video/swf';
               if (!isJpgOrPng && !isAudio && !isDoc && !isVideo) {
                   message.error('You can only upload [.mp4 .m4v .mpg .wmv .mov .avi .swf ][.mp3 .m4a .wav][.jpg .jpeg .png .gif][.pdf .doc .docx .ppt .pptx .xls .xlsx]  file!');
                   //   return;
               }
    */

            const isLt2M = file.size / 100024 / 100024 < 2;

            if (!isLt2M) {
                //  ccc = true;
                message.error('File must smaller than 100MB!');
                //  return;
            }
            //  SetFileSize(false);isJpgOrPng &&
            return isLt2M //&& isVideo && isDoc && isAudio && isJpgOrPng;
        },
        onChange(info) {
            //    console.log(info)
            if (info.file.status !== 'uploading') {
              //  console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
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