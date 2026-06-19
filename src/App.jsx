import React, { useState } from 'react';

const BrandLogo = ({ onClick, isSidebar = false }) => (
  <div className={`flex items-center cursor-pointer group flex-wrap gap-2 ${isSidebar ? 'space-x-2' : 'space-x-4'}`} onClick={onClick}>
    <span className={`font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500 drop-shadow-lg ${isSidebar ? 'text-2xl' : 'text-3xl'}`}>
      METAGER
    </span>
    <a 
      href="https://digitalheroesco.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      onClick={(e) => e.stopPropagation()} 
      className={`inline-flex items-center rounded-md bg-green-900/20 border border-green-500/70 font-bold text-green-400 uppercase tracking-widest hover:border-green-400 hover:text-green-300 hover:bg-green-900/40 transition-all shadow-[0_0_15px_rgba(34,197,94,0.15)] ${isSidebar ? 'px-2 py-1 text-[9px] whitespace-nowrap' : 'px-3 py-1.5 text-[10px]'}`}
    >
      Built for Digital Heroes
    </a>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [copied, setCopied] = useState(false);
  
  const [metaData, setMetaData] = useState({
    pageType: 'website',
    title: 'Best Digital Marketing Course Online',
    description: 'Learn from industry experts. Get certified in SEO, Social Media & Google Ads today. Join thousands of successful alumni and launch your career in tech.',
    url: 'https://yoursite.com',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    siteName: 'LearnPro',
    twitterHandle: '@learnpro',
    cardType: 'summary_large_image',
    keywords: 'digital marketing, seo course, social media training',
    author: 'Mayur Saproo'
  });

  const [generatedData, setGeneratedData] = useState({ ...metaData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMetaData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerate = () => {
    setGeneratedData({ ...metaData });
  };

  const getCounterColor = (length, min, max) => {
    if (length < min) return 'text-yellow-500';
    if (length >= min && length <= max) return 'text-green-500';
    return 'text-red-500';
  };

  const generateCode = () => {
    return `<title>${generatedData.title}</title>
<meta name="title" content="${generatedData.title}">
<meta name="description" content="${generatedData.description}">
<meta name="keywords" content="${generatedData.keywords}">
<meta name="author" content="${generatedData.author}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="${generatedData.pageType.toLowerCase()}">
<meta property="og:url" content="${generatedData.url}">
<meta property="og:title" content="${generatedData.title}">
<meta property="og:description" content="${generatedData.description}">
<meta property="og:image" content="${generatedData.imageUrl}">
<meta property="og:site_name" content="${generatedData.siteName}">

<!-- Twitter / X -->
<meta property="twitter:card" content="${generatedData.cardType}">
<meta property="twitter:url" content="${generatedData.url}">
<meta property="twitter:title" content="${generatedData.title}">
<meta property="twitter:description" content="${generatedData.description}">
<meta property="twitter:image" content="${generatedData.imageUrl}">
<meta property="twitter:site" content="${generatedData.twitterHandle}">
<meta property="twitter:creator" content="${generatedData.twitterHandle}">`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadHTML = () => {
    const element = document.createElement("a");
    const file = new Blob([generateCode()], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = "meta-tags.html";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const NavBar = () => (
    <nav className="bg-black/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <BrandLogo onClick={() => setCurrentPage('landing')} />
          <div className="flex items-center space-x-6 sm:space-x-8">
            <button onClick={() => setCurrentPage('main')} className={`font-semibold text-xs sm:text-sm transition-colors ${currentPage === 'main' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Generator</button>
            <button onClick={() => setCurrentPage('about')} className={`font-semibold text-xs sm:text-sm transition-colors ${currentPage === 'about' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>About</button>
            <button onClick={() => setCurrentPage('contact')} className={`font-semibold text-xs sm:text-sm transition-colors ${currentPage === 'contact' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );

  const LandingPage = () => (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      <style>{`
        @keyframes float-1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        @keyframes float-2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-30px) rotate(-5deg); } }
        @keyframes float-3 { 0%, 100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-15px) scale(1.05); } }
      `}</style>
      <div className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-purple-600/15 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[20%] left-[50%] translate-x-[-50%] w-200 h-100 bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* Floating Background Icons with Neon Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
         {/* Google Glow */}
         <svg style={{ animation: 'float-1 8s ease-in-out infinite' }} className="absolute top-[15%] left-[5%] md:left-[15%] w-24 h-24 md:w-32 md:h-32 text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.8)]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z"/></svg>
         {/* Facebook Glow */}
         <svg style={{ animation: 'float-2 10s ease-in-out infinite' }} className="absolute top-[25%] right-[5%] md:right-[15%] w-28 h-28 md:w-40 md:h-40 text-blue-600 drop-shadow-[0_0_35px_rgba(37,99,235,0.9)]" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
         {/* X.com Glow */}
         <svg style={{ animation: 'float-3 9s ease-in-out infinite' }} className="absolute bottom-[20%] left-[8%] md:left-[12%] w-20 h-20 md:w-28 md:h-28 text-purple-400 drop-shadow-[0_0_25px_rgba(192,132,252,0.8)]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
         {/* WhatsApp Glow */}
         <svg style={{ animation: 'float-1 11s ease-in-out infinite reverse' }} className="absolute bottom-[15%] right-[10%] md:right-[20%] w-24 h-24 md:w-32 md:h-32 text-green-400 drop-shadow-[0_0_30px_rgba(74,222,128,0.8)]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
      </div>

      <NavBar />
      <div className="grow flex flex-col items-center justify-center text-center px-4 -mt-10 relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter leading-[1.1]">
          Preview your site <br /> on <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400">social media.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed">
          Generate perfectly formatted SEO tags and instantly visualize how your links will appear across the web.
        </p>
        <button 
          onClick={() => setCurrentPage('main')}
          className="group relative inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 font-bold text-black bg-white rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        >
          <span className="relative z-10 text-base md:text-lg">Start Generating →</span>
        </button>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      <NavBar />
      <div className="grow max-w-3xl mx-auto py-20 px-6 w-full relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight">About METAG</h2>
        <div className="prose prose-lg prose-invert text-gray-400 mb-16">
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            METAG is a premium tool built to help developers and marketers visualize how their web pages will appear across different social media platforms and search engines before deploying to production.
          </p>
          <h3 className="text-2xl font-bold text-white mt-12 mb-6 border-b border-gray-800 pb-2">Technology Stack</h3>
          <ul className="space-y-4 mb-8 text-base md:text-lg">
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span><strong>Frontend:</strong> React.js & Vite.</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span><strong>Styling:</strong> Tailwind CSS.</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span><strong>State Management:</strong> React Hooks.</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      <NavBar />
      <div className="grow max-w-xl mx-auto py-16 md:py-24 px-4 w-full flex flex-col items-center text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-12 tracking-tight">Contact</h2>
        <div className="bg-linear-to-b from-[#111] to-black p-8 md:p-12 rounded-4xl shadow-2xl border border-gray-800 w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Mayur Saproo</h3>
          <p className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400 font-bold tracking-wide mb-10 text-sm md:text-lg">Front-end Developer and ML Enthusiast</p>
          <div className="space-y-4 text-left">
            <div className="p-4 md:p-5 bg-black/50 backdrop-blur-md rounded-2xl border border-gray-800/50 hover:border-gray-700 transition-colors">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1.5">Email</p>
              <p className="text-gray-100 font-medium text-base md:text-lg break-all">mayursaproo1111@gmail.com</p>
            </div>
            <div className="p-4 md:p-5 bg-black/50 backdrop-blur-md rounded-2xl border border-gray-800/50 hover:border-gray-700 transition-colors">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1.5">Phone</p>
              <p className="text-gray-100 font-medium text-base md:text-lg">+91 6006803075</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MainPage = () => (
    <div className="h-screen flex flex-col md:flex-row bg-[#0a0a0a] overflow-hidden font-sans">
      
      {/* LEFT SIDEBAR (Input Controls) - Responsive Split Screen on Mobile */}
      <div className="w-full md:w-105 h-[45vh] md:h-full bg-linear-to-b from-[#050505] to-black text-white flex flex-col border-b md:border-b-0 md:border-r border-gray-900 shadow-2xl z-20 shrink-0 relative">
        <div className="p-4 md:p-6 border-b border-gray-900/80 bg-transparent relative z-10 flex flex-wrap items-center justify-between gap-y-3 shrink-0">
          <BrandLogo onClick={() => setCurrentPage('landing')} isSidebar={true} />
          <div className="flex space-x-4">
            <button onClick={() => setCurrentPage('about')} className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">About</button>
            <button onClick={() => setCurrentPage('contact')} className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Contact</button>
          </div>
        </div>

        {/* Scrollable Form */}
        <div className="p-4 md:p-6 space-y-6 grow overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-800 [&::-webkit-scrollbar-track]:bg-transparent relative z-10">
          <div>
            <h2 className="text-lg md:text-xl font-bold mb-1 text-white tracking-tight">Configure Meta Data</h2>
            <p className="text-[11px] md:text-xs text-gray-500">Edit your content below, then generate.</p>
          </div>

          <div className="space-y-5">
            <div className="group">
              <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 group-focus-within:text-blue-500 transition-colors">Page Type</label>
              <select 
                name="pageType" 
                value={metaData.pageType} 
                onChange={handleInputChange} 
                className="w-full bg-[#111] border border-gray-800 text-white px-3 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-all shadow-inner"
              >
                <option value="Website">Website</option>
                <option value="Article">Article</option>
                <option value="Product">Product</option>
                <option value="Profile">Profile</option>
              </select>
            </div>

            <div className="group">
              <div className="flex justify-between mb-1.5">
                <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider group-focus-within:text-blue-500 transition-colors">Page Title</label>
                <span className={`text-[10px] md:text-xs font-bold ${getCounterColor(metaData.title.length, 50, 60)}`}>
                  {metaData.title.length} / 60
                </span>
              </div>
              <input 
                type="text" 
                name="title" 
                value={metaData.title} 
                onChange={handleInputChange} 
                className="w-full bg-[#111] border border-gray-800 text-white px-3 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-all shadow-inner"
              />
            </div>

            <div className="group">
               <div className="flex justify-between mb-1.5">
                <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider group-focus-within:text-blue-500 transition-colors">Meta Description</label>
                <span className={`text-[10px] md:text-xs font-bold ${getCounterColor(metaData.description.length, 150, 160)}`}>
                  {metaData.description.length} / 160
                </span>
              </div>
              <textarea 
                name="description" 
                value={metaData.description} 
                onChange={handleInputChange} 
                rows="4" 
                className="w-full bg-[#111] border border-gray-800 text-white px-3 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-all resize-none shadow-inner"
              />
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div className="group">
                <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 group-focus-within:text-blue-500 transition-colors">Page URL</label>
                <input type="text" name="url" value={metaData.url} onChange={handleInputChange} className="w-full bg-[#111] border border-gray-800 text-white px-3 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-all shadow-inner"/>
              </div>
              <div className="group">
                <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 group-focus-within:text-blue-500 transition-colors">OG Image URL</label>
                <input type="text" name="imageUrl" value={metaData.imageUrl} onChange={handleInputChange} className="w-full bg-[#111] border border-gray-800 text-white px-3 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-all shadow-inner"/>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 group-focus-within:text-blue-500 transition-colors">Site Name</label>
                <input type="text" name="siteName" value={metaData.siteName} onChange={handleInputChange} className="w-full bg-[#111] border border-gray-800 text-white px-3 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-all shadow-inner"/>
              </div>
              <div className="group">
                <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 group-focus-within:text-blue-500 transition-colors">Twitter Handle</label>
                <input type="text" name="twitterHandle" value={metaData.twitterHandle} onChange={handleInputChange} className="w-full bg-[#111] border border-gray-800 text-white px-3 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-all shadow-inner"/>
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 group-focus-within:text-blue-500 transition-colors">Twitter Card Type</label>
              <select 
                name="cardType" 
                value={metaData.cardType} 
                onChange={handleInputChange} 
                className="w-full bg-[#111] border border-gray-800 text-white px-3 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-all shadow-inner"
              >
                <option value="summary_large_image">Summary Large Image</option>
                <option value="summary">Summary (Small Image)</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 group-focus-within:text-blue-500 transition-colors">Keywords</label>
              <input type="text" name="keywords" value={metaData.keywords} onChange={handleInputChange} className="w-full bg-[#111] border border-gray-800 text-white px-3 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-all shadow-inner"/>
            </div>
            
            <div className="group">
              <label className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 group-focus-within:text-blue-500 transition-colors">Author</label>
              <input type="text" name="author" value={metaData.author} onChange={handleInputChange} className="w-full bg-[#111] border border-gray-800 text-white px-3 py-3 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-all shadow-inner"/>
            </div>

          </div>
        </div>
        
        <div className="p-4 md:p-6 border-t border-gray-900/80 shrink-0 bg-[#050505]">
          <button 
            onClick={handleGenerate}
            className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Generate Live Preview
          </button>
        </div>
      </div>

      <div className="flex-1 h-[55vh] md:h-full overflow-y-auto p-4 sm:p-6 md:p-10 bg-[#fafafa] relative [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-transparent">
        <div className="max-w-6xl mx-auto pb-20">
          
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-black text-gray-800 tracking-tight">Live Previews</h2>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 w-full">
            
            {/* 1. Generated Code Section (Full Width) */}
            <div className="w-full">
               <h3 className="text-[10px] md:text-xs font-black text-gray-500 mb-2 md:mb-3 uppercase tracking-widest flex items-center">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span> Code — Syntax Highlighted
              </h3>
              <div className="bg-[#050505] rounded-2xl overflow-hidden shadow-xl border border-gray-800 flex flex-col">
                <div className="flex justify-between items-center px-4 md:px-5 py-3 border-b border-gray-800/50 bg-[#0a0a0a]">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex space-x-4">
                    <button onClick={copyToClipboard} className={`text-[10px] flex items-center font-bold uppercase tracking-widest transition-colors ${copied ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}>
                      {copied ? (
                         <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      ) : (
                         <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                      )}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                    <button onClick={downloadHTML} className="text-[10px] flex items-center font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-widest">
                       <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                      Download
                    </button>
                  </div>
                </div>
                <div className="p-4 md:p-5 overflow-x-auto text-[11px] md:text-[12px] font-mono text-blue-200/80 leading-relaxed [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-gray-700">
                  <pre>{generateCode()}</pre>
                </div>
              </div>
            </div>

            {/* 2. Google Preview (Full Width) */}
            <div className="w-full">
              <h3 className="text-[10px] md:text-xs font-black text-gray-500 mb-2 md:mb-3 uppercase tracking-widest flex items-center">
                <span className="w-2 h-2 bg-[#4285F4] rounded-full mr-2"></span> Google Search
              </h3>
              <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <p className="text-xs md:text-sm text-[#202124] mb-1">{generatedData.url}</p>
                <h3 className="text-xl md:text-[22px] text-[#1a0dab] cursor-pointer hover:underline mb-1 font-medium leading-tight">{generatedData.title}</h3>
                <p className="text-[13px] md:text-[14px] text-[#4d5156] leading-snug wrap-break-word max-w-3xl">{generatedData.description}</p>
              </div>
            </div>

            {/* Explicit Two-Column Grid for Social Cards to prevent masonry whitespace issues */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 w-full mt-2 items-start">
              
              {/* Left Column: Facebook Preview */}
              <div className="flex flex-col w-full">
                 <h3 className="text-[10px] md:text-xs font-black text-gray-500 mb-2 md:mb-3 uppercase tracking-widest flex items-center">
                  <span className="w-2 h-2 bg-[#1877F2] rounded-full mr-2"></span> Facebook
                </h3>
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col w-full">
                  <div className="h-50 sm:h-65.25 bg-[#f0f2f5] relative border-b border-gray-100 shrink-0">
                    {generatedData.imageUrl && <img src={generatedData.imageUrl} alt="preview" className="w-full h-full object-cover"/>}
                  </div>
                  <div className="p-4 bg-[#f0f2f5] grow">
                    <p className="text-[11px] md:text-[12px] text-[#65676B] uppercase tracking-wider mb-0.5">{new URL(generatedData.url || 'https://yoursite.com').hostname.replace('www.', '')}</p>
                    <h3 className="font-bold text-[15px] md:text-[16px] text-black leading-tight mb-1 truncate">{generatedData.title}</h3>
                    <p className="text-[13px] md:text-[14px] text-[#65676B] line-clamp-1">{generatedData.description}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Twitter + WhatsApp stacked together */}
              <div className="flex flex-col gap-6 md:gap-8 w-full">
                {/* 4. Twitter / X Preview */}
                <div className="w-full">
                  <h3 className="text-[10px] md:text-xs font-black text-gray-500 mb-2 md:mb-3 uppercase tracking-widest flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-2"></span> Twitter / X
                  </h3>
                  <div className={`bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${generatedData.cardType === 'summary' ? 'flex h-32.5' : 'flex-col'}`}>
                    <div className={`${generatedData.cardType === 'summary' ? 'w-32.5 h-full shrink-0 border-r border-gray-100' : 'h-50 sm:h-65.25 w-full border-b border-gray-100'} bg-[#f0f2f5] relative`}>
                      {generatedData.imageUrl && <img src={generatedData.imageUrl} alt="preview" className="w-full h-full object-cover"/>}
                    </div>
                    <div className={`p-4 bg-white flex flex-col justify-center ${generatedData.cardType === 'summary' ? 'flex-1 min-w-0' : ''}`}>
                      <p className="text-[13px] md:text-[14px] text-[#536471] mb-0.5">{new URL(generatedData.url || 'https://yoursite.com').hostname.replace('www.', '')}</p>
                      <h3 className="font-bold text-[14px] md:text-[15px] text-[#0f1419] leading-tight mb-1 truncate">{generatedData.title}</h3>
                      <p className="text-[13px] md:text-[14px] text-[#536471] line-clamp-2">{generatedData.description}</p>
                    </div>
                  </div>
                </div>

                {/* 5. WhatsApp Preview */}
                <div className="w-full">
                  <h3 className="text-[10px] md:text-xs font-black text-gray-500 mb-2 md:mb-3 uppercase tracking-widest flex items-center">
                    <span className="w-2 h-2 bg-[#25D366] rounded-full mr-2"></span> WhatsApp
                  </h3>
                  <div className="bg-[#e1f3fb] border border-[#d3eaf5] rounded-xl overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow relative">
                    <div className="h-45 sm:h-50 bg-[#f0f2f5] relative shrink-0">
                      {generatedData.imageUrl && <img src={generatedData.imageUrl} alt="preview" className="w-full h-full object-cover"/>}
                    </div>
                    <div className="p-3 pb-4 bg-[#e1f3fb]">
                      <h3 className="font-bold text-[14px] md:text-[15px] text-[#000000] leading-tight mb-1 truncate">{generatedData.title}</h3>
                      <p className="text-[12px] md:text-[13px] text-[#4a4a4a] line-clamp-1 mb-1">{generatedData.description}</p>
                      <p className="text-[11px] md:text-[12px] text-[#8c8c8c] lowercase">{new URL(generatedData.url || 'https://yoursite.com').hostname.replace('www.', '')}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main>
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'main' && <MainPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
    </main>
  );
}
