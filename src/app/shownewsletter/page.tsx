"use client"; // top to the file
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button, ConfigProvider, Space } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";


export default function ShowNewsletter() {
  return (
    <>
      <div className="grid grid-flow-col py-4">
        <div className="justify-items-start">
          <div className="grid grid-flow-col">
            <div className="bg-red-500 w-2" />
            <div className="pl-4">
              <h1 className="text-xxl font-bold">จดหมายข่าว</h1>
              <h1 className="text-xxl text-[#DAA520]">Newsletter</h1>
            </div>
          </div>
        </div>
        <div className="justify-items-end">
          <div className=" ">
            <ConfigProvider>
              <Space>
                <Button
                  type="primary"
                  size="large"
                  icon={<AntDesignOutlined />}
                  href="/newsletter"
                >
                  เนื้อหาเพิ่มเติม
                </Button>
              </Space>
            </ConfigProvider>
          </div>
        </div>
      </div >
    </>
  );
}
