
import React, { useState, useEffect } from 'react';
import { IdCard } from './components/IdCard';
import { GALLERY_ITEMS, DELEGATE_DATA } from './constants.tsx';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'diplomacy' | 'meetings'>('all');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredGallery = GALLERY_ITEMS.filter(item => {
    if (activeTab === 'all') return true;
    return item.category.toLowerCase() === activeTab;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>
              <i className="fa-solid fa-landmark"></i>
            </div>
            <span className={`font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>T. WOLDU</span>
          </div>
          <div className={`hidden md:flex gap-8 text-sm font-medium ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
            <a href="#home" className="hover:text-blue-500 transition-colors">Credential</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">Profile</a>
            <a href="#gallery" className="hover:text-blue-500 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl">
            Inquire
          </button>
        </div>
      </nav>

      {/* Hero / Landing Section */}
      <header id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900 py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="input_file_3.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest animate-pulse">
            Verified Diplomatic Status
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            International Delegate <br/> <span className="text-blue-400">Temesgn Woldu</span>
          </h1>
          
          <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex flex-col items-center gap-4">
              <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">Digital ID Card</span>
              <IdCard />
            </div>
            <div className="hidden lg:block w-px h-64 bg-white/10"></div>
            <div className="flex flex-col items-center gap-4">
              <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">Official Document</span>
              <div className="relative group">
                <img 
                  src="input_file_0.png" 
                  alt="Official ID Card" 
                  className="w-full max-w-sm rounded-lg shadow-2xl border border-white/20 transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-2 text-gray-400">
            <i className="fa-solid fa-chevron-down animate-bounce mt-4"></i>
          </div>
        </div>
      </header>

      {/* Profile / About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="input_file_1.png" 
                  alt="Official Portrait" 
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full -z-0"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-50 rounded-full -z-0"></div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Diplomatic Profile</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  As an <strong>International Delegate</strong> for the Ethiopian Youth Council (EYC), Temesgn Woldu Gebremedhin 
                  represents the voice of the Ethiopian youth on the global stage. His presence at high-level summits 
                  demonstrates Ethiopia's commitment to international dialogue and sustainable youth development.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-blue-600 mb-2"><i className="fa-solid fa-globe"></i></div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase">Global Presence</h4>
                    <p className="text-xs">Active participation in international forums with representatives from Eswatini, Brazil, and more.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-green-600 mb-2"><i className="fa-solid fa-handshake"></i></div>
                    <h4 className="font-bold text-gray-900 text-sm uppercase">Bilateral Ties</h4>
                    <p className="text-xs">Strengthening relations through formal audiences with regional and international leaders.</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl">
                      EYC
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Ethiopian Youth Council</h4>
                      <p className="text-xs text-gray-500">Official National Delegate Organ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Missions in Action</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Visual documentation of official diplomatic activities and international youth representation.</p>
            
            <div className="flex justify-center gap-4 mt-10">
              {(['all', 'diplomacy', 'meetings'] as const).map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredGallery.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2 inline-block">{item.category}</span>
                  <h3 className="text-gray-900 font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credential Details Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-800/50 rounded-3xl p-8 md:p-12 border border-blue-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <i className="fa-solid fa-address-card text-blue-400"></i>
                  Credential Overview
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between py-3 border-b border-blue-700/50">
                    <span className="text-blue-300 text-sm uppercase font-semibold">Reference ID</span>
                    <span className="font-mono text-white">{DELEGATE_DATA.idNumber}</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-blue-700/50">
                    <span className="text-blue-300 text-sm uppercase font-semibold">Valid Until</span>
                    <span className="text-white">{DELEGATE_DATA.expiryDate}</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-blue-700/50">
                    <span className="text-blue-300 text-sm uppercase font-semibold">Official Base</span>
                    <span className="text-white">Addis Ababa, Ethiopia</span>
                  </li>
                  <li className="flex justify-between py-3 border-b border-blue-700/50">
                    <span className="text-blue-300 text-sm uppercase font-semibold">Status</span>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-[10px] font-bold">ACTIVE</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center text-center p-6 bg-blue-700/30 rounded-2xl">
                <i className="fa-solid fa-shield-halved text-5xl mb-6 text-blue-400"></i>
                <h4 className="text-xl font-bold mb-4">Official Verification</h4>
                <p className="text-sm text-blue-200 leading-relaxed">
                  This identity card certifies Temesgn Woldu Gebremedhin as a legitimate representative of the 
                  Ethiopian Youth Council. This digital portfolio serves as a public verification of credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                   <i className="fa-solid fa-earth-africa"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">T. Gebremedhin</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Representing the future of Ethiopia through global engagement and youth leadership. 
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm text-gray-500">
              <div>
                <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Links</h4>
                <ul className="space-y-4">
                  <li><a href="#home" className="hover:text-blue-600">Credential</a></li>
                  <li><a href="#about" className="hover:text-blue-600">Profile</a></li>
                  <li><a href="#gallery" className="hover:text-blue-600">Gallery</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Office</h4>
                <p className="mb-2">{DELEGATE_DATA.address}</p>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
            <p>&copy; 2024 Temesgn Woldu Gebremedhin. Verified International Delegate Portfolio.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
