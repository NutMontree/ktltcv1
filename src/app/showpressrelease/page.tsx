"use client"; // top to the file
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button, ConfigProvider, Space } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

export default function ShowPressRelease() {

  return (
    <>
      <div className="relative z-20 overflow-hidden lg:pt-[40px]">
        <div className="">
          {/*   title title title title title title title title title title title title title title title title title title */}
          <div className="grid grid-flow-col py-4">
            <div className="justify-items-start">
              <div className="grid grid-flow-col">
                <div className="bg-red-500 w-2" />
                <div className="pl-4">
                  <h1 className="text-xxl font-bold">ข่าวประชาสัมพันธ์</h1>
                  <h1 className="text-xxl text-[#DAA520]"> Press Release Page</h1>
                </div>
              </div>
            </div>
            <div className="justify-items-end">
              <div className=" ">
                <ConfigProvider  >
                  <Space>
                    <Button
                      type="primary"
                      size="large"
                      icon={<AntDesignOutlined />}
                      href="/pressrelease"
                    >
                      เนื้อหาเพิ่มเติม
                    </Button>
                  </Space>
                </ConfigProvider>
              </div>
            </div>
          </div >
          {/*   title title title title title title title title title title title title title title title title title title */}
          <div className="grid grid-flow-col">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
