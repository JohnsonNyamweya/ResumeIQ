import React, { Profiler, useState } from "react";
import {BookTemplateIcon, FileEdit, LucideShare, PictureInPicture2, Share, Share2, Upload, Zap} from 'lucide-react'
import Title from "./Title.jsx";

const Features = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div id="#features" className="flex flex-col items-center my-10 scroll-mt-12">

        <div className="flex items-center gap-2 text-sm text-teal-800 bg-blue-teal/10 border border-teal-200 rounded-full px-6 py-1.5">
            <Zap width={14}/>
            <span>Easy process</span>
        </div>

        <Title title={"Build your resume"} description={"Create a professional-grade resume effortlessly within minutes through our intuitive platform equipped with cutting-edge artificial intelligence features."}/>

      <div className="flex flex-col md:flex-row items-center justify-center xl:-mt-10">
        <img
          className="max-w-2xl w-full xl:-ml-32"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt=""
        />
        <div
          className="px-4 md:px-0"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div
            className={
              "flex items-center justify-center gap-6 max-w-md group cursor-pointer"
            }
          >
            <div
              className={`p-6 group-hover:bg-teal-100 border border-transparent group-hover:border-teal-300  flex gap-4 rounded-xl transition-colors ${
                !isHover ? "border-teal-300 bg-teal-100" : ""
              }`}
            >
              <Upload/>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  AI-Powered Optimization
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Upload and enhance your existing resume with intelligent suggestions.
                </p>
              </div>
            </div>
          </div>
        
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-teal-100 border border-transparent group-hover:border-teal-300 flex gap-4 rounded-xl transition-colors">
              <FileEdit/>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Easy Management
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Create, edit, delete and download unlimited resumes from one dashboard.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-teal-100 border border-transparent group-hover:border-teal-300 flex gap-4 rounded-xl transition-colors">
              <BookTemplateIcon/>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  Multiple Templates
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Choose from professional designs that suit your style.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
    </div>
  );
};

export default Features;
