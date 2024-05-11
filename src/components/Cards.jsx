import ComponentCard from "./ComponentCard";
import FileAdd from "../assets/icons/file-add.png";
import { InboxOutlined, RedEnvelopeOutlined, LayoutOutlined } from "@ant-design/icons";
import BundleCard from "./BundleCard";
import { Button } from "antd";

function Cards() {

  const items = [
    { title: "Boxes", icon: <InboxOutlined /> },
    { title: "Envelopes", icon: <RedEnvelopeOutlined /> },
    { title: "Bubble Wrap", icon: <LayoutOutlined /> }
  ];

  const items2 = [
    { title: "Bundle 1", icon: <InboxOutlined /> },
    { title: "Bundle 2", icon: <InboxOutlined /> },
    { title: "Bundle 3", icon: <LayoutOutlined /> }
  ];

  return (
    <>
      <div className="flex gap-1 flex-col">
        <div className="flex gap-4 items-start h-8  mb-6">
          <h1 className="text-[26px] font-medium">Components</h1>
          <img src={FileAdd} alt="" className="pt-1 h-8" />
        </div>
        {items.map((elem, idx) => (
          <div key={idx}>
            <ComponentCard title={elem.title} icon={elem.icon} />
          </div>
        ))}
      </div>

      <div>
        <div>
          <div className="flex gap-4 items-start h-8  mb-6">
            <h1 className="text-[26px] font-medium">Bundles</h1>
            <img src={FileAdd} alt="" className="pt-1 h-8" />
          </div>
        </div>

        {items2.map((elem, idx) => (
          <div key={idx}>
            <BundleCard title={elem.title} icon={elem.icon}/>
          </div>
        ))}
      </div>

      <Button type="primary" shape="round" className="w-32 pb-8 mt-8 text-[16px]">
        Save
      </Button>
    </>
  );
}

export default Cards;
