import React from 'react';

const TopMenu = () => {
  return (
    <nav className="flex p-6 bg-ui-background shadow-2xl">
      <div className="items-center flex-sh mr-6">
        <span className="font-semibold text-5xl">Tamara Hsu</span>
      </div>
      <div className="w-full justify-end flex-grow flex lg:items-center lg:w-auto">
        <div className="flex gap-4 text-4xl">
          <a href="#" className="">
            Work
          </a>
          <a href="#" className="">
            Resume
          </a>
          <a href="#" className="">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
