import ComponentCard from "./ComponentCard";
import FileAdd from "../assets/icons/file-add.png";
import {
  InboxOutlined,
  RedEnvelopeOutlined,
  LayoutOutlined,
} from "@ant-design/icons";
import BundleCard from "./BundleCard";
import { Button } from "antd";
import NewComponent from "./NewComponent";
import { useState } from "react";
import NewBundle from "./NewBundle";

function Cards() {
  const [AddNewComponent, SetAddNewComponent] = useState(false);

  const [AddNewBundle, SetAddNewBundle] = useState(false);
  

  const items = [
    { title: "Boxes", icon: <InboxOutlined /> },
    { title: "Envelopes", icon: <RedEnvelopeOutlined /> },
    { title: "Bubble Wrap", icon: <LayoutOutlined /> },
  ];

  const items2 = [
    { title: "Bundle 1", icon: <InboxOutlined /> },
    { title: "Bundle 2", icon: <InboxOutlined /> },
    { title: "Bundle 3", icon: <LayoutOutlined /> },
  ];

  const AddComponent = () => {
    SetAddNewComponent(!AddNewComponent);
  };

  const AddBundle = () => {
    SetAddNewBundle(!AddNewBundle);
  };

  return (
    <>
      <div className="flex gap-1 flex-col">
        <div className="flex gap-4 items-start h-8  mb-6">
          <h1 className="text-[26px] font-medium">Components</h1>
          <img
            src={FileAdd}
            alt=""
            className="pt-1 h-8 cursor-pointer"
            onClick={AddComponent}
          />
        </div>
        {items.map((elem, idx) => (
          <div key={idx}>
            <ComponentCard title={elem.title} icon={elem.icon} />
          </div>
        ))}
      </div>

      <div
        className={
          AddNewComponent
            ? "absolute top-0 left-0 z-30 w-[100vw] h-screen overflow-auto"
            : "w-0 overflow-hidden absolute"
        }
        // onClick={AddComponent}
      >
        <div className="bg-zinc-400 flex justify-center py-[20vh] bg-opacity-50 w-full">
          <NewComponent onSave={AddComponent} />
        </div>
      </div>

      <div>
        <div>
          <div className="flex gap-4 items-start h-8  mb-6">
            <h1 className="text-[26px] font-medium">Bundles</h1>
            <img
              src={FileAdd}
              alt=""
              className="pt-1 h-8 cursor-pointer"
              onClick={AddBundle}
            />
          </div>
        </div>

        {items2.map((elem, idx) => (
          <div key={idx}>
            <BundleCard title={elem.title} icon={elem.icon} />
          </div>
        ))}
      </div>

      <div
        className={
          AddNewBundle
            ? "absolute top-0 left-0 z-20 w-[100vw] h-screen overflow-auto"
            : "w-0 overflow-hidden absolute"
        }
        // onClick={AddBundle}
      >
        <div className="bg-zinc-400 flex justify-center py-[20vh] bg-opacity-50 w-full">
          <NewBundle onSave={AddBundle} className="z-50 pointer-events-auto"/>
        </div>
      </div>

      <Button
        type="primary"
        shape="round"
        className="w-32 pb-8 mt-8 text-[16px]"
      >
        Save
      </Button>
    </>
  );
}

export default Cards;
