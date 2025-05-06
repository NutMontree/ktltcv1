import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  // {
  //   id: 1,
  //   title: "Home",
  //   path: "/",
  //   newTab: false,
  // },
  {
    id: 2,
    title: "ประวัติสถานศึกษา",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "ประวัติสถานศึกษา",
        path: "/historyeducational",
        newTab: false,
      },
      {
        id: 22,
        title: "ปรัชญา วิสัยทัศน์ เอกลักษ์ อัตลักษณ์",
        path: "/philosophy",
        newTab: false,
      },
      {
        id: 23,
        title: "ทำเนียบผู้บริหาร",
        path: "/eduadmin",
        newTab: false,
      },
      {
        id: 24,
        title: "โครงสร้างการบริหารงานสถานศึกษา",
        path: "/administrativestructure",
        newTab: false,
      },
      {
        id: 25,
        title: "คณะกรรมการบริหารสถานศึกษา",
        path: "/executiveboard",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "ข้อมูลพื้นฐาน 9 ประการ",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "ข้อมูลสถานศึกษา",
        path: "/historyeducational",
        newTab: false,
      },
      {
        id: 32,
        title: "ข้อมูลบุคลากร",
        path: "/personnel",
        newTab: false,
      },
      {
        id: 33,
        title: "ข้อมูลนักเรียน นักศึกษา",
        path: "/sid",
        newTab: false,
      },
      {
        id: 34,
        title: "ข้อมูลหลักสูตร",
        path: "/ ",
        newTab: false,
      },
      {
        id: 35,
        title: "ข้อมูลครุภัณฑ์",
        path: "/ ",
        newTab: false,
      },
      {
        id: 36,
        title: "ข้อมูลงบประมาณ",
        path: "/ ",
        newTab: false,
      },
      {
        id: 37,
        title: "ข้อมูลอาคารสถานที่",
        path: "/buildings",
        newTab: false,
      },
      {
        id: 38,
        title: "ข้อมูลตลาดแรงงาน",
        path: "/ ",
        newTab: false,
      },
      {
        id: 39,
        title: "ข้อมูลของจังหวัด",
        path: "https://www.sisaket.go.th/",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "หน่วยงานภายใน",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "ฝ่ายบริหารทรัพยากร",
        path: "/resource",
        newTab: false,
      },
      {
        id: 42,
        title: "ฝ่ายแผนงานและความร่วมมือ",
        path: "/plan",
        newTab: false,
      },
      {
        id: 43,
        title: "ฝ่ายพัฒนากิจการนักเรียน นักศึกษา",
        path: "/develop",
        newTab: false,
      },
      {
        id: 44,
        title: "ฝ่ายวิชาการ",
        path: "/academic",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "ข้อมูลบุคลากร",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "ผู้บริหารสถานศึกษา",
        path: "/executive",
        newTab: false,
      },
      {
        id: 52,
        title: "แผนกวิชาช่างยนต์",
        path: "/mechanic",
        newTab: false,
      },
      {
        id: 53,
        title: "แผนกวิชาช่างกลโรงงาน",
        path: "/machine",
        newTab: false,
      },
      {
        id: 54,
        title: "แผนกวิชาช่างเชื่อมโลหะ",
        path: "/welder",
        newTab: false,
      },
      {
        id: 55,
        title: "แผนกวิชาช่างไฟฟ้ากำลัง",
        path: "/electricity",
        newTab: false,
      },
      {
        id: 56,
        title: "แผนกวิชาช่างอิเล็กทรอนิกส์",
        path: "/electronics",
        newTab: false,
      },
      {
        id: 57,
        title: "แผนกวิชาเทคนิคพื้นฐาน",
        path: "/technique",
        newTab: false,
      },
      {
        id: 58,
        title: "แผนกวิชาช่างก่อสร้าง",
        path: "/construct",
        newTab: false,
      },
      {
        id: 59,
        title: "แผนกวิชาบัญชี",
        path: "/accounting",
        newTab: false,
      },
      {
        id: 510,
        title: "แผนกวิชาการตลาด",
        path: "/marketing",
        newTab: false,
      },
      {
        id: 511,
        title: "แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล",
        path: "/technology",
        newTab: false,
      },
      {
        id: 512,
        title: "แผนกวิชาการโรงแรม",
        path: "/hotel",
        newTab: false,
      },
      {
        id: 513,
        title: "แผนกวิชาสามัญสัมพันธ์",
        path: "/ordinary",
        newTab: false,
      },

    ],
  },
  {
    id: 6,
    title: "เมนูลัด",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "ศูนย์ราชการสะดวก",
        path: "/GECC",
        newTab: false,
      },
      {
        id: 62,
        title: "ระบบ ศธ. ออนไลน์",
        path: "https://std2018.vec.go.th/web",
        newTab: false,
      },
      {
        id: 63,
        title: "ตรวจสอบผลการเรียน",
        path: "https://std2018.vec.go.th/web/",
        newTab: false,
      },
      {
        id: 64,
        title: "รับงานอิเล็กทรอนิกส์",
        path: "/ ",
        newTab: false,
      },
      {
        id: 65,
        title: "สมัครเรียนออนไลน์",
        path: "/ ",
        newTab: false,
      },
      {
        id: 66,
        title: "บทเรียนออนไลน์",
        path: "/ ",
        newTab: false,
      },
      {
        id: 67,
        title: "ระบบสืบค้นข้อมูลคลังเก็บรูปภาพ",
        path: "/pressrelease ",
        newTab: false,
      },
      {
        id: 69,
        title: "ศูนย์กำลังคนอาชีวศึกษา (V-COP)",
        path: "https://v-cop.go.th/",
        newTab: false,
      },
      {
        id: 610,
        title: "รายงานประจำของสถานศึกษา (SAR)",
        path: "/ ",
        newTab: false,
      },
      {
        id: 611,
        title: "Plan PDCA",
        path: "https://ktltcp.vercel.app/ ",
        newTab: false,
      },
      {
        id: 612,
        title: "แบบประเมินความพึงพอใจของผู้ใช้บริการข้อมูลด้านระบบสารสนเทศ",
        path: "https://forms.gle/Hcwfjvd7S8zTbA3C8",
        newTab: false,
      },
    ],
  },
];
export default menuData;
