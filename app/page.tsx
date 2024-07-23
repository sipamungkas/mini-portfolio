import { Link } from "@nextui-org/link";

import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { button as buttonStyles } from "@nextui-org/theme";

import { title } from "@/components/primitives";
import NextImage from "next/image";
import ProjectItem from "@/components/project-item";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 md:px-12">
      <div className="flex justify-between">
        <div className="w-[60%]">
          <div className="inline-block">
            <h1 className={title()}>Hi, I am&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>Ragil&nbsp;</h1>

            <h4 className="mt-3 text-slate-500 dark:text-slate-400 text-md">
              Welcome to my space!
            </h4>
          </div>
          <p className="mt-3">
            I am an experienced{" "}
            <span className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">
              React Native
            </span>{" "}
            and{" "}
            <span className="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">
              web developer{" "}
            </span>{" "}
            with over 3 years of hands-on experience in building custom mobile
            apps and custom website. My expertise lies in creating high-quality,
            scalable solutions that meet the unique needs of each project.
          </p>
        </div>
        <Image
          as={NextImage}
          isBlurred
          width={150}
          height={150}
          src="/images/me.jpg"
          alt="Ragil's Photo"
          className="m-5"
          radius="full"
        />
      </div>

      <div className="mt-8 lg:mt-20 w-full">
        <div className="flex justify-between items-center">
          <h2 className={title({ size: "sm" })}>Experience</h2>
          <Link
            isExternal
            size="lg"
            className={buttonStyles({
              color: undefined,
              radius: "full",
              variant: "ghost",
            })}
            href={"/resume.pdf"}
          >
            Resume
          </Link>
        </div>
        <div>
          <h3 className="mt-8 text-lg md:text-xl font-semibold mb-4">
            React Native Developer @Telkom Indonesia
          </h3>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-3 italic">
            August 2021 - Present
          </p>
          <ul className=" marker:text-[#b249f8] list-outside list-disc ml-6 gap-1 flex flex-col text-lg font-normal">
            <li>
              Developed new functionality to support existing mobile
              application.
            </li>
            <li>
              Developed and maintained highly scalable android and ios apps
              using React Native, Typescript, Jest, firebase and Redux.
            </li>
            <li>
              Actively participated in daily standups, project breakdown,
              estimation, and retrospective meetings.
            </li>
            <li>Enhancing and Optimizing the Payment and Billing Feature.</li>
          </ul>
          <Divider className="mt-8 md:mt-12 h-0.5" />
        </div>

        <div>
          <h3 className="mt-8 text-lg md:text-xl font-semibold mb-4">
            Fullstack Laravel Developer @PT Pan Brothers Tbk
          </h3>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-3 italic">
            January 2020 - January 2021
          </p>
          <ul className=" marker:text-[#b249f8] list-outside list-disc ml-6 gap-1 flex flex-col text-lg font-normal">
            <li>
              Developed Human Resource information and personalia system and
              many other internal system
            </li>
            <li>
              Developed an app to track employee attendance, calculate working
              hours and overtime, and manage payroll efficiently.
            </li>
            <li>Actively participated in code improvement and new feature.</li>
          </ul>
          <Divider className="mt-8 md:mt-12 h-0.5" />
        </div>

        <div>
          <h3 className="mt-8 text-lg md:text-xl font-semibold mb-4">
            React Native Mobile Developer @PT Kreasi Kode Indonesia
          </h3>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-3 italic">
            2019
          </p>
          <ul className=" marker:text-[#b249f8] list-outside list-disc ml-6 gap-1 flex flex-col text-lg font-normal">
            <li>
              Developed custom mobile applications using the React Native
              framework, seamlessly integrating business logic and UI/UX designs
              provided by the UI/UX Division.
            </li>
            <li>
              Successfully delivered the 'Master Event' app for The ICIFPRH
              2019, utilizing React Native to meet all functional and aesthetic
              requirements.
            </li>
          </ul>
          <Divider className="mt-8 md:mt-12 h-0.5" />
        </div>
      </div>

      <div className="mt-8 lg:mt-20 w-full">
        <h2 className={title({ size: "sm" })}>Latest Projects</h2>
        <div className="mt-8 grid grid-cols-2 gap-8">
          <ProjectItem
            stack="React Native, Socket.io, ReactJS, ExpressJs, Firebase, Typescript"
            image="/images/projects/dl/cover.png"
            title="Daily Language"
            description="Interactive English course mobile app featuring comprehensive stats tracking, real-time text messaging, and real-time voice chat functionalities, ensuring an immersive and effective learning experience using react native, reactjs and express.js"
          />
          <ProjectItem
            stack="React Native, Socket.io, ReactJS, ExpressJs, Firebase, Typescript"
            image="/images/projects/dl/cover.png"
            title="Daily Language"
            description="Interactiveive stats tracking, real-time text messaging, and real-time voice chat functionalities, ensuring an immersive and effective learning experience using react native, reactjs and express.js"
          />
        </div>
      </div>
    </section>
  );
}
