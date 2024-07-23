import { convertIsoToDate } from "@/utils/date";
import { trimText } from "@/utils/text";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import React from "react";

export type PostItemProps = {
  title: string;
  description: string;
  date: string;
};

function PostItem({ title, description, date }: PostItemProps) {
  return (
    <Link href="https://sipamungkas.medium.com/krealogi-ux-case-study-simple-crm-customer-relationship-management-3744b1deda40">
      <Card className="w-full p-0 border-b-1 hover:scale-105 pb-2 border-[#b249f8] rounded-none bg-transparent">
        <CardHeader className="px-0 w-full">
          <div className="flex flex-1 flex-col md:flex-row md:items-center md:justify-between">
            <h4 className="font-bold text-large">{title}</h4>
            <p className="text-small mt-2 md:text-right tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b opacity-90">
              {convertIsoToDate(date)}
            </p>
          </div>
        </CardHeader>
        <CardBody className="px-0">{trimText(description ?? "")}</CardBody>
      </Card>
    </Link>
  );
}

export default PostItem;
