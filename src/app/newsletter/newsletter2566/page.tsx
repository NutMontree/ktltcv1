"use client"; // top to the file
import { Button } from 'antd';
import Link from "next/link";
import NewsletterPage from '../page';


export default function Newsletter2566() {
  return (
    <>
      <NewsletterPage />
      <div className="grid gap-4 pt-20 pb-4">
        <div>
          <Button color="primary">
            <Link
              className="text-lg"
              href="/newsletter/newsletter2566/newsletter666"
            >
              ปีการศึกษา 2566
            </Link>
          </Button>
        </div>
      </div>


    </>
  );
}
