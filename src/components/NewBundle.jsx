import { useState } from "react";
import CheckButton from "./CheckButton";
import { Form, Input, Flex, Rate, Button } from "antd";
import {
  PlusOutlined,
  InfoCircleOutlined,
  LayoutOutlined,
  GiftOutlined,
  HourglassOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import { Image, Upload } from "antd";
import FileAdd from "../assets/icons/file-add.png";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

function NewBundle({ onSave }) {

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        borderRadius: 8,
        height: "100%",
        width: "100%",
      }}
      className="bg-zinc-50"
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
        className="text-zinc-400"
      >
        Upload Icon or Illustrations
      </div>
    </button>
  );

  const [value, setValue] = useState(3);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <>
      <div
        className="bg-zinc-50 border-2 border-zinc-200 rounded-lg w-[56vw] transition-all mb-6"
      >
        <Form layout="vertical" className="m-6">
          <h2 className="text-[23px] font-medium pb-4">New Bundle</h2>

          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 6 ? null : uploadButton}
          </Upload>

          {previewImage && (
            <Image
              wrapperStyle={{
                display: "none",
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}

          <Form.Item
            label={
              <span className="font-medium pt-3 text-[16px] flex gap-4">
                <h1>Bundle Name</h1>
              </span>
            }
          >
            <Input placeholder="Enter Name" className="h-11 w-[95%]" />
          </Form.Item>

          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-[16px] font-medium">Rating of Bundle</h1>

            <Flex gap="middle" vertical>
              <Rate tooltips={desc} onChange={setValue} value={value} />
            </Flex>
          </div>

          <div className="flex flex-col gap-4 w-[95%]">
            <div className="flex gap-4 items-start h-8  mb-6">
              <h2 className="text-[26px] font-medium">Components</h2>
              <img src={FileAdd} alt="" className="pt-1 h-8" />
            </div>
            <div className="flex gap-2">
              <InfoCircleOutlined className="py-2 px-4 rounded-lg border-zinc-300 border-[1px]" />

              <div className="w-full flex">
                <Input
                  placeholder="Enter About Component"
                  className="h-11 text-[17px]"
                  onChange={handleInputChange}
                />
                {inputValue && (
                  <DeleteFilled
                    className="text-red-300 cursor-pointer bg-red-100 w-10 flex justify-center items-center rounded-r-lg"
                    onClick={clearInput}
                  />
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <LayoutOutlined className="py-2 px-4 rounded-lg border-zinc-300 border-[1px]" />

              <div className="w-full flex">
                <Input
                  placeholder="Enter About Component"
                  className="h-11 text-[17px]"
                  onChange={handleInputChange}
                />
                {inputValue && (
                  <DeleteFilled
                    className="text-red-300 cursor-pointer bg-red-100 w-10 flex justify-center items-center rounded-r-lg"
                    onClick={clearInput}
                  />
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <HourglassOutlined className="py-2 px-4 rounded-lg border-zinc-300 border-[1px]" />

              <div className="w-full flex">
                <Input
                  placeholder="Enter About Component"
                  className="h-11 text-[17px]"
                  onChange={handleInputChange}
                />
                {inputValue && (
                  <DeleteFilled
                    className="text-red-300 cursor-pointer bg-red-100 w-10 flex justify-center items-center rounded-r-lg"
                    onClick={clearInput}
                  />
                )}
              </div>
            </div>

            <div className="flex gap-2">
              <GiftOutlined className="py-2 px-4 rounded-lg border-zinc-300 border-[1px]" />

              <div className="w-full flex">
                <Input
                  placeholder="Enter About Component"
                  className="h-11 text-[17px]"
                  onChange={handleInputChange}
                />
                {inputValue && (
                  <DeleteFilled
                    className="text-red-300 cursor-pointer bg-red-100 w-10 flex justify-center items-center rounded-r-lg"
                    onClick={clearInput}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Form.Item
              label={
                <span className="pt-3 text-[22px] font-medium">
                  Set Price On Bundle
                </span>
              }
            >
              <Input placeholder="Enter Price" className="h-11 w-[24vw]" />
            </Form.Item>
            <Form.Item
              label={
                <span className="pt-3 text-[22px] font-medium">
                  Discount on Bundle
                </span>
              }
            >
              <Input placeholder="Enter Price" className="h-11 w-[24vw]" />
            </Form.Item>
          </div>

          <Button
            type="primary"
            shape="round"
            className="w-32 pb-8 text-[16px]"
            onClick={onSave}
          >
            Save Changes
          </Button>
        </Form>
      </div>
    </>
  );
}

export default NewBundle;
