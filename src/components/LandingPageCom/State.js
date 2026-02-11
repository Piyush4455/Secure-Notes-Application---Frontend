import React from "react";
import CardSlider from "./CardSlider";

const State = () => {
  return (
    <div className="py-28">
      <div className="flex justify-between items-center md:px-0 px-4">
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <span className="sm:text-4xl text-logoText text-slate-700 font-bold">
            7x
          </span>
          <span className="text-slate-600 text-center sm:text-sm text-xs ">
            Faster Secure Note Creation
          </span>
        </div>{" "}
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <span className="sm:text-4xl text-logoText text-slate-700 font-bold">
            42x
          </span>
          <span className="text-slate-600 text-center  sm:text-sm text-xs">
            Faster Note Access
          </span>
        </div>{" "}
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <span className="sm:text-4xl text-logoText text-slate-700 font-bold">
            300%
          </span>
          <span className="text-slate-600 text-center  sm:text-sm text-xs">
            Improved Data Security
          </span>
        </div>
      </div>

      <div className="mt-10 md:px-0 px-4">
        <h3 className="text-slate-700 text-2xl font-semibold pb-5 pt-6">
          Why Users Love Secure Notes
        </h3>

        <div className="flex md:flex-row flex-col md:gap-0 gap-16 justify-between">
          <ul className="list-disc sm:px-5 ps-10 text-slate-700 flex flex-col gap-5 flex-1 overflow-hidden">
            <li>Trusted by thousands of professionals worldwide.</li>
            <li>Secure access to your notes anytime, anywhere.</li>
            <li>Optimized search for lightning-fast note retrieval.</li>
            <li>Multi-layer security with Spring Security & JWT.</li>
            <li>OAuth login using Google & GitHub accounts.</li>
            <li>99.9% uptime and reliable performance.</li>
            <li>Audit logs to track all note activity.</li>
          </ul>

          <div className="flex-1 overflow-hidden">
            <CardSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
