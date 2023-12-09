import { useState } from "react";
import "./App.css";
import QrCodeSvg from "./components/QrCode";
import ThreadLogo from "./components/ThreadLogoSvg";
import { data } from "./components/data";
import { FaLink } from "react-icons/fa6";

function App() {
  const [activeQrModel, setActiveQrModel] = useState(false);
  const [activeReportProblemModel, setActiveReportProblemModel] =
    useState(false);

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center text-white">
      {/* Image Component */}
      <div className="flex w-full max-w-[410px] flex-col items-center justify-center p-6 sm:mt-[15vh]">
        <ThreadLogo />
        {/* header  */}
        <p className="mb-4 font-bold">Log in with your Instagram account</p>
        {/* input's div  */}
        <div className="flex w-full flex-col items-center justify-center  ">
          <input
            type="text"
            className="mb-2 w-full rounded-lg border-[#f3f5f7] bg-[#1e1e1e] p-4 text-[15px] text-sm text-white outline-none placeholder:text-[15px] placeholder:text-[#777777]  sm:rounded-xl"
            placeholder="Username, Phone number or email address"
          />
          <input
            type="password"
            className="mb-2 w-full rounded-lg bg-[#1e1e1e] p-4 text-[15px] text-sm text-white outline-none placeholder:text-[15px] placeholder:text-[#777777] focus:outline-[1px] focus:outline-[#1e1e1e] sm:rounded-xl"
            placeholder="Password"
          />
          <button className="mb-4 w-full rounded-lg bg-white p-4 text-[15px] text-[#777777] outline-none sm:rounded-xl">
            Log in
          </button>
        </div>
        <p className="mb-5 text-[15px] text-[#777777]">Forgotten password ?</p>
        <div className="text-[#777777]">
          <p className="mb-5 flex items-center justify-center before:absolute before:w-[140px] before:-translate-x-[67%] before:border-t-2 before:border-[#1e1e1e] before:content-[''] after:absolute after:w-[140px] after:translate-x-[67%] after:border-t-2 after:border-[#1e1e1e] after:content-['']">
            or
          </p>
        </div>
        <button className="flex w-full items-center justify-around rounded-xl border-2 border-[#1e1e1e] p-4">
          <img
            src="./ig-logo-135.png"
            className="w-[45px]"
            alt="Instagram Logo"
          />
          <p className="font-bold">Continue with Instagram</p>
          <RightArrowComponent />
        </button>
      </div>
      <FooterComponent
        activeReportProblemModel={activeReportProblemModel}
        setActiveReportProblemModel={setActiveReportProblemModel}
      />
      <QrCode
        activeQrModel={activeQrModel}
        setActiveQrModel={setActiveQrModel}
      />
      <QrCodeModel
        activeQrModel={activeQrModel}
        setActiveQrModel={setActiveQrModel}
      />
      <ReportProblem
        activeReportProblemModel={activeReportProblemModel}
        setActiveReportProblemModel={setActiveReportProblemModel}
      />
    </main>
  );
}

function ImageComponent() {
  return (
    <div className="absolute top-0 -z-10 w-[1785px] border">
      <img src="./Image.webp" alt="" />
    </div>
  );
}

function RightArrowComponent() {
  return (
    <div className="rotate-180">
      <svg fill="#777777" height="16" role="img" viewBox="0 0 24 24" width="16">
        <title>Log in</title>
        <polyline
          fill="none"
          points="16.502 3 7.498 12 16.502 21"
          stroke="#777777"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></polyline>
      </svg>
    </div>
  );
}

function FooterComponent({
  activeReportProblemModel,
  setActiveReportProblemModel,
}) {
  return (
    <div className="absolute bottom-0 flex h-[70px] w-full items-center justify-center p-4 text-xs text-[#777777]">
      <ul className="flex h-full w-full flex-wrap items-center justify-center whitespace-nowrap">
        <li className="">&copy; 2023</li>
        {data.map((item, index) => (
          <li key={index} className="ml-3">
            <a href={item.href} target="_blank" className="">
              {item.title}
            </a>
          </li>
        ))}
        <li
          onClick={() => setActiveReportProblemModel(!activeReportProblemModel)}
          className="ml-3 cursor-pointer hover:underline"
        >
          Report a problem
        </li>
      </ul>
    </div>
  );
}

function QrCode({ activeQrModel, setActiveQrModel }) {
  return (
    <div className="absolute bottom-7 right-7 hidden text-[13px] text-[#777777] md:flex md:flex-col md:items-center md:justify-center">
      <p className="pb-4">Scan to get the app</p>
      <div
        className="rounded-2xl border-[1px] border-[#383939] bg-[#181818] p-4 duration-200 hover:scale-110"
        onClick={() => {
          setActiveQrModel(!activeQrModel);
          console.log(activeQrModel);
        }}
      >
        <div className="w-[86px] lg:w-[106px]  xl:w-[115px] 2xl:w-[131px]">
          <QrCodeSvg />
        </div>
      </div>
    </div>
  );
}

function QrCodeModel({ activeQrModel, setActiveQrModel }) {
  return (
    <>
      {activeQrModel ? (
        <div className="absolute grid h-full w-full place-content-center bg-[#181818] bg-opacity-50 text-white backdrop-blur-xl">
          <div
            onClick={() => setActiveQrModel(false)}
            className="absolute left-[25px] top-[25px] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-[#181818] p-3 text-sm"
          >
            <span className="absolute inset-0 m-auto h-[1px] w-[20px] rotate-45 bg-gray-100"></span>
            <span className="absolute inset-0 m-auto h-[1px] w-[20px] -rotate-45 bg-gray-100"></span>
          </div>
          <div className="w-[308px] rounded-[26px] border-[1px] border-[#383939] bg-[#181818] p-8">
            <div className="">
              <QrCodeSvg />
            </div>
          </div>
          <p className="mt-3 text-center font-bold">Get the app</p>
        </div>
      ) : null}
    </>
  );
}

function ReportProblem({
  activeReportProblemModel,
  setActiveReportProblemModel,
}) {
  return (
    <>
      {activeReportProblemModel ? (
        <div className="absolute grid h-full w-full place-content-center bg-[#181818] bg-opacity-50 text-white backdrop-blur-xl">
          <div
            onClick={() => setActiveReportProblemModel(false)}
            className="absolute left-[25px] top-[25px] flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-[#181818] p-3 text-sm"
          >
            <span className="absolute inset-0 m-auto h-[1px] w-[20px] rotate-45 bg-gray-100"></span>
            <span className="absolute inset-0 m-auto h-[1px] w-[20px] -rotate-45 bg-gray-100"></span>
          </div>
          <p className="mb-3 text-center font-bold">Report a problem</p>
          <div className="w-[340px] rounded-[26px] border-[1px] border-[#383939] bg-[#181818] p-8">
            <textarea
              name="postContent"
              rows={4}
              cols={40}
              placeholder="Please include as many detail as possible.."
              className="mb-5 resize-none border bg-[#181818] text-sm text-[#878787] outline-none placeholder:text-[#777777]"
            />
            <div className="flex w-full items-center justify-between">
              <FaLink />
              <button>Submit</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
