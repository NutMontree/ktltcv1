"use client"
import { AntDesignOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Space } from 'antd';
import { createStyles } from 'antd-style';
// import { Metadata } from "next";
import Link from "next/link";
import Features from "@/components/Features";
import Wellcome from "@/components/wellcome";
import ShowBidding from "./showbidding/page";
import ShowYoutube from "./ShowYoutube/page";
import ShowNewsletter from "./shownewsletter/page";
import Scrollimage from "@/components/Scrollimage";
import ScrollUp from "@/components/Common/ScrollUp";
import ShowFacebook from "@/components/ShowFacebook";
import ShowAnnouncement from "./showannouncement/page";
import ScrollVelocity from "@/components/Scrollvelocity";
import ShowTechnicalcollegeorders from "./showtechnicalcollegeorders/page";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import CounterPage from "@/components/counter";
import ShowPressRelease from './showpressrelease/page';

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));
export default function Home() {
  const { styles } = useStyle();

  return (
    <main className=" ">
      <Link href={"https://ktltc.vercel.app/"}>

        <div className="relative z-10 overflow-hidden pb-[60px] pt-[100px] ">
          <div className="from-stroke/0 via-stroke to-stroke/0 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
          <div className="w-full px-4">
            <div className="text-center">
              <h1 className="flex justify-center text-xl ">คลังเก็บข้อมูลวิทยาลัยเทคนิคกันทรลักษ์ V1</h1>
              <h1 className="flex justify-center text-xl text-[#DAA520] pb-8">
                data storage V1<br /> Kanthalak Technical College
              </h1>
            </div>
            <div className="flex items-center justify-center gap-[10px]">
              <ConfigProvider
                button={{
                  className: styles.linearGradientButton,
                }}
              >
                <Space>
                  <Button type="primary" size="large" icon={<AntDesignOutlined />}>
                    กลับสู่หน้าหลัก
                  </Button>
                </Space>
              </ConfigProvider>
            </div>
          </div>
        </div >
      </Link>
      <div className="container py-[48px] ">
        <ScrollVelocity />
      </div>
      <div className="container">
        <ShowPressRelease />
      </div>
      <div className="container py-[48px]">
        <ShowNewsletter />
      </div>
      <div className="container py-[48px]">
        <ShowAnnouncement />
      </div>
      <div className="container py-[48px]">
        <ShowBidding />
      </div>
      <div className="container py-[48px]">
        <ShowTechnicalcollegeorders />
      </div>
      <div className="container py-[48px]">
        <ShowFacebook />
      </div>
      {/* <div className="container py-[48px]">
        <ShowYoutube />
      </div> */}

      {/* <About />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <Faq />
      <Team />
      <Contact />
      <Clients /> */}
      <div id="fb-root"></div>
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v22.0&appId=952832906928077"></script>
      <div className="fb-comments" data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid0SoQQJJH18oLEp5Zt4kF9hKXdJGhyXw41Md5hJv9WWpzWzNjGyit4DzyHAoL27BnPl&amp;id=61575575410714" data-width="" data-numposts="5"></div>


    </main>
  );
}