"use client"; // top to the file
import Link from "next/link";
import { Button } from 'antd';
import PressReleasePage from "../page";

export default function Pressrelease2566() {
  return (
    <>
      <PressReleasePage />
      <div className="grid gap-4 pt-20 pb-4">
        <div>
          <Button color="primary">
            <Link
              className="text-lg"
              href="/pressrelease/2566/pressrelease6612"
            >
              เดือน ธันวาคม 2566
            </Link>
          </Button>
        </div>
        <div>
          <Button color="primary">
            <Link
              className="text-lg"
              href="/pressrelease/2566/pressrelease6611"
            >
              เดือน พฤศจิกายน 2566
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
