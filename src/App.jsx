import "./App.css";
import QrCode from "./components/QR_Svg";
import ThreadLogo from "./components/ThreadLogoSvg";
import "./App.css";
import { data } from "./components/data";

function App() {
  return (
    <main className="relative flex h-screen w-full items-center justify-center text-white">
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
      <FooterComponent />
    </main>
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

function FooterComponent() {
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
        <li className="ml-3">Report a problem</li>
      </ul>
    </div>
  );
}

export default App;
