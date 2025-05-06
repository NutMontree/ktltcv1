"use client"; // top to the file

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Image } from "@nextui-org/react";

import { Button, ConfigProvider, Space } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

import { DataPressrelease } from "../pressrelease/2568/press6805/data";
import Link from "next/link";

export default function ShowPressRelease() {

  return (
    <>
      <div className="relative z-20 overflow-hidden lg:pt-[40px]">
        <span className="absolute left-4 top-4 -z-[1]">
          <svg
            width="48"
            height="134"
            viewBox="0 0 48 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="45.6673"
              cy="132"
              r="1.66667"
              transform="rotate(180 45.6673 132)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 45.6673 117.333)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 45.6673 102.667)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 45.6673 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 45.6673 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 45.6673 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 45.6673 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 45.6673 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 45.6673 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 45.6673 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="132"
              r="1.66667"
              transform="rotate(180 31.0013 132)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.0013 117.333)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.0013 102.667)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 31.0013 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 31.0013 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 31.0013 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 31.0013 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 31.0013 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 31.0013 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 31.0013 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="132"
              r="1.66667"
              transform="rotate(180 16.3333 132)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 16.3333 117.333)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 16.3333 102.667)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 16.3333 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 16.3333 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 16.3333 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 16.3333 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 16.3333 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 16.3333 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 16.3333 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="132"
              r="1.66667"
              transform="rotate(180 1.66732 132)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 1.66732 117.333)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 1.66732 102.667)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 1.66732 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 1.66732 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 1.66732 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 1.66732 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 1.66732 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 1.66732 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 1.66732 1.66683)"
              fill="#13C296"
            />
          </svg></span>
        <div className="pt-28">
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
              {DataPressrelease.navItems.slice(0, 4).map((item) => (
                <div key={item.name} className="hover:bg-orange-300 px-2 py-2 rounded-xl ">
                  <Link key={item.href} href={item.href}>
                    <div className="
                                    mb-4 relative shadow-lg rounded-xl 
                                    h-[180px]
 
                                    overflow-hidden
                                    hover:bg-orange-500
                                    ">
                      <div
                        className="absolute inset-0 bg-cover bg-no-repeat bg-center hover:scale-110 duration-500"
                        style={{
                          backgroundImage: `url(${item.backgroundImage})`,
                        }}
                      />
                    </div>
                    <div>
                      <h1 className="text-[14px] md:text-[20px] sm:text-sm md:text-base font-bold hover:text-sky-600" >
                        {item.name}
                      </h1>
                      <div className="text-[12px] md:text-[14px] sm:text-sm md:text-base mb-2">
                        {item.description}
                      </div>
                      <div className="flex gap-1">
                        <Image src='/images/icon/time-svgrepo-com.svg' alt='logo-youtube' width={20} height={20} />
                        <div className="text-xs text-slate-500 text-[12px] md:text-[14px] sm:text-sm md:text-base">
                          {item.date}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>


          {/* <div className="py-3">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                400: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                600: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                800: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1000: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
                1400: {
                  slidesPerView: 6,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              modules={[Navigation, Scrollbar, A11y, Autoplay, FreeMode]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              centeredSlides={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
            >
              <div>
                {DataPressrelease.navItems.slice(0, 6).map((item) => (
                  <SwiperSlide key={item.name}>
                    <NextLink key={item.href} href={item.href}>
                      <div
                        className="
                                    mb-4 relative shadow-lg rounded-2xl 
                                    h-[180px]
                                    sm:h-[180px] 
                                    md:h-[200px]
                                    lg:h-[210px]
                                    xl:h-[220px]
                                    overflow-hidden
                                    hover:bg-orange-500
                                    "
                      >
 
                        <div
                          className="absolute inset-0 bg-cover bg-no-repeat bg-center hover:scale-110 duration-500"
                          style={{
                            backgroundImage: `url(${item.backgroundImage})`,
                          }}
                        />
                      </div>
                      <div>
                        <h1 className="text-[14px] md:text-[20px] sm:text-sm md:text-base text-sky-600 " >
                          {item.name}
                        </h1>
                        <div className="text-[12px] md:text-[14px] sm:text-sm md:text-base mb-2">
                          {item.description}
                        </div>
                        <div className="flex gap-1">
                          <Image src='/images/icon/time-svgrepo-com.svg' alt='logo-youtube' width={20} height={20} />
                          <div className="
                                            text-xs text-slate-500 text-[12px] md:text-[14px] sm:text-sm md:text-base 
                                            mb-10 pt-1 md:pt-0
                                            ">
                            {item.date}
                          </div>
                        </div>
                      </div>
                    </NextLink>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div> */}
        </div>
      </div>
    </>
  );
}
