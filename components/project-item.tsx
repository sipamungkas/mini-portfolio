import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

export type ProjectItemProps = {
  title: string;
  description: string;
  image: string;
  stack: string;
};

const ProjectItem = ({
  title,
  description,
  image,
  stack,
}: ProjectItemProps) => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-full hover:scale-105"
      shadow="sm"
      isPressable
      isHoverable
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
        <small className="text-default-500 mt-2 text-left">{stack}</small>
        <p className="text-small text-left mt-2">{description}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          as={NextImage}
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={1024}
          height={500}
          layout="responsive"
        />
      </CardBody>
    </Card>
  );
};

export default ProjectItem;
