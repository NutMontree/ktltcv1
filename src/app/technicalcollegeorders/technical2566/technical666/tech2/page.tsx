"use client"; // top to the file
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { dataTech2 } from "./data";
import { Image } from "@nextui-org/react";

export default function Texh2() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex flex-col gap-2">
        <Button onPress={onOpen}>เปิด เพื่อดู</Button>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          scrollBehavior={"inside"}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <div>
                    {dataTech2.Image.map((item) => (
                      <div key={item.title}>{item.title}</div>
                    ))}
                  </div>
                </ModalHeader>
                <ModalBody>
                  <div>
                    {dataTech2.Image.map((item) => (
                      <div key={item.description}>{item.description}</div>
                    ))}
                  </div>
                  <div>
                    <Link
                      className="text-lg text-red-500"
                      href="http://ktltc.ac.th/wp-content/uploads/2023/10/%E0%B8%84%E0%B8%B3%E0%B8%AA%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%B9%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%A3%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%9B%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81.pdf"
                    >
                      ดาวโหลดลิงค์ PDF
                    </Link>
                  </div>
                  {dataTech2.Image.map((item) => (
                    <div key={item.backgroundImage}>
                      <div>
                        <Image src={item.backgroundImage} alt={""}></Image>
                      </div>
                    </div>
                  ))}
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
