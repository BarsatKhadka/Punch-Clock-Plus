import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-200 text-neutral-900 p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-neutral-900">Logo</div>
          <div className="text-lg font-light text-neutral-600">Punch Clock +</div>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-neutral-900 hover:text-neutral-600">Home</a>
          <a href="#contact" className="text-neutral-900 hover:text-neutral-600">Contact</a>
          <a href="#contribute" className="text-neutral-900 hover:text-neutral-600">Contribute</a>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="block w-6 h-0.5 bg-neutral-900 mb-1"></span>
          <span className="block w-6 h-0.5 bg-neutral-900 mb-1"></span>
          <span className="block w-6 h-0.5 bg-neutral-900"></span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 bg-neutral-200 p-4">
          <a href="#home" className="text-neutral-900 hover:text-neutral-600">Home</a>
          <a href="#contact" className="text-neutral-900 hover:text-neutral-600">Contact</a>
          <a href="#contribute" className="text-neutral-900 hover:text-neutral-600">Contribute</a>
        </div>
      )}
    </nav>
  );
};
