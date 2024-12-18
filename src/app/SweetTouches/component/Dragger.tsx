import styled from "styled-components";
import { InboxOutlined } from "@ant-design/icons";
import { Form, Upload } from "antd";
import { UploadChangeParam } from "antd/es/upload";

const normFile = (e: UploadChangeParam) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const Dragger = () => {
  return (
    <DraggerWrapper>
      <Form.Item >
        <StyledLabel>Upload Yours:</StyledLabel>
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <StyledDragger name="files" action="/upload.do">
            <IconWrapper>
              <InboxOutlined />
            </IconWrapper>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </StyledDragger>
        </Form.Item>
      </Form.Item>
    </DraggerWrapper>
  );
};

// Styled Components
const StyledLabel = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary || "#262424"};
  margin-bottom: 8px;
  opacity: 0.9;
`;

const DraggerWrapper = styled.div`
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.05) 0px 2px 8px 0px;
  padding: 18px;
  border-radius: 4px;
  transition: all 0.3s;
  
  background:linear-gradient(to bottom, #C47B83, #f9f9f9);

  &:hover {
    box-shadow: rgba(58, 57, 57, 0.532) 4px 4px 8px 0px;
  }
`;

const StyledDragger = styled(Upload.Dragger)`
  background: none;
  border: none;
  padding: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};

  .ant-upload-text {
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.9;
  }

  .ant-upload-hint {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.para_text_color};
    margin-top: 4px;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary || "#1890ff"};
  margin-bottom: 12px;
`;
