
import React from 'react';
import { DELEGATE_DATA } from '../constants.tsx';

export const IdCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[1.6/1] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 group transform transition-transform hover:scale-105 duration-300">
      {/* Background Watermark/Patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center">
        <span className="text-8xl font-black rotate-45">VERIFIED</span>
      </div>

      {/* Header */}
      <div className="relative bg-white border-b border-gray-100 p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            <i className="fa-solid fa-earth-africa"></i>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[10px] font-bold tracking-tight text-blue-900 leading-none">ETHIOPIAN YOUTH COUNCIL</h2>
            <p className="text-[8px] text-gray-600">የኢትዮጵያ ወጣቶች ምክር ቤት</p>
          </div>
        </div>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/2560px-Flag_of_Ethiopia.svg.png" 
          alt="Ethiopia Flag" 
          className="h-6 w-10 shadow-sm rounded-sm"
        />
      </div>

      {/* Sub-Header */}
      <div className="bg-gray-50 py-1 text-center border-b border-gray-100">
        <h3 className="text-[10px] font-semibold text-gray-800 uppercase tracking-widest">Employee Identification Card</h3>
        <p className="text-[8px] text-gray-500">የሰራተኛ መታወቂያ ካርድ</p>
      </div>

      {/* Content Area */}
      <div className="flex h-full p-4 gap-4">
        {/* Profile Photo */}
        <div className="w-1/3">
          <div className="aspect-[3/4] rounded-lg border-2 border-blue-100 overflow-hidden shadow-inner bg-gray-200">
             <img 
              src="input_file_1.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2 text-center">
            <div className="w-full h-4 bg-gray-100 rounded flex items-center px-1 overflow-hidden">
              <div className="w-full h-[2px] bg-black opacity-20"></div>
              <div className="w-full h-[2px] bg-black opacity-40 mx-1"></div>
            </div>
            <p className="text-[8px] font-mono mt-1 text-gray-400">#7501-25</p>
          </div>
        </div>

        {/* Details Area */}
        <div className="flex-1 flex flex-col justify-start gap-3">
          <div>
            <div className="flex justify-between items-baseline">
              <span className="text-[8px] font-bold text-blue-800 uppercase">Name</span>
              <span className="text-[7px] text-gray-400">ስም</span>
            </div>
            <p className="text-[11px] font-bold text-gray-900 leading-tight">{DELEGATE_DATA.name}</p>
            <p className="text-[10px] text-gray-600">{DELEGATE_DATA.nameAmharic}</p>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <span className="text-[8px] font-bold text-blue-800 uppercase">Position</span>
              <span className="text-[7px] text-gray-400">የስራ ድርሻ</span>
            </div>
            <p className="text-[10px] font-medium text-gray-800">{DELEGATE_DATA.position}</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-[7px] font-bold text-gray-500 uppercase block">Issue Date</span>
              <p className="text-[9px] font-bold">{DELEGATE_DATA.issueDate}</p>
            </div>
            <div>
              <span className="text-[7px] font-bold text-gray-500 uppercase block">Expiry Date</span>
              <p className="text-[9px] font-bold text-red-600">{DELEGATE_DATA.expiryDate}</p>
            </div>
          </div>

          <div>
            <span className="text-[7px] font-bold text-gray-500 uppercase block">Address / አድራሻ</span>
            <p className="text-[9px] text-gray-700">{DELEGATE_DATA.address}</p>
          </div>
        </div>
      </div>

      {/* Footer / Barcode */}
      <div className="absolute bottom-0 w-full h-8 bg-gray-50 border-t border-gray-100 flex items-center justify-between px-4">
        <div className="flex gap-px">
          {Array.from({length: 40}).map((_, i) => (
            <div key={i} className="bg-black" style={{ width: Math.random() > 0.5 ? '1px' : '2px', height: '16px', opacity: Math.random() > 0.3 ? 1 : 0.5 }}></div>
          ))}
        </div>
        <span className="text-[10px] font-mono font-bold text-gray-800">{DELEGATE_DATA.idNumber}</span>
      </div>
    </div>
  );
};
