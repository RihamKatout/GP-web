import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Divider, Upload } from "antd";
const { Dragger } = Upload;
import { InboxOutlined } from "@ant-design/icons";
import { BackgroundRemover } from ".";

interface ImageUploaderProps {
  setFinalImage: (image: File | null) => void;
  imageName: string;
}
export const ImageUploader: React.FC<ImageUploaderProps> = ({
  setFinalImage,
  imageName,
}) => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [withoutBackground, setWithoutBackground] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");

  const handleFileChange = (info: any) => {
    const { fileList } = info;
    if (fileList.length === 0) {
      setUploadedImage(null);
      setImagePreviewUrl("");
      return;
    }
    const file = fileList[0].originFileObj;
    if (file) {
      setUploadedImage(file);
      const url = URL.createObjectURL(file);
      setImagePreviewUrl(url);
    }
  };
  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  useEffect(() => {
    setFinalImage(withoutBackground || uploadedImage);
  }, [withoutBackground, uploadedImage]);

  return (
    <Container>
      <h6>{imageName}</h6>
      <div className="main-image">
        {uploadedImage && (
          <ImagePreview>
            <img src={imagePreviewUrl} alt="Uploaded" />
          </ImagePreview>
        )}
        <Dragger
          accept="image/*"
          maxCount={1}
          onChange={handleFileChange}
          style={{ width: 210, fontSize: "0.8rem", margin: "0" }}
          beforeUpload={() => false}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined style={{ width: "40px" }} />
          </p>
          <p>Click or drag an image to upload</p>
        </Dragger>
      </div>
      {/* BackgroundRemover Integration */}
      <Divider style={{ margin: "1rem 0" }} />
      <h6>Background Remover</h6>
      {uploadedImage && (
        <BackgroundRemover
          imageFile={uploadedImage}
          setWithoutBackground={setWithoutBackground}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .main-image {
    width: auto;
    gap: 1rem;
    display: flex;
    padding: 0 1rem;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const ImagePreview = styled.div`
  img {
    max-width: 210px;
    max-height: 118px;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;
