import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { url: '/praesidium', name: 'Praesidium' },
  { url: '/clubs', name: 'Clubs' },
  { url: '/clublied', name: 'Clublied' },
  { url: '/sponsors', name: 'Sponsors' },
  { url: '/contact', name: 'Contact' },
];

const NavMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname: active } = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [active]);

  return (
    <>
      <nav className="flex justify-center items-center bg-white text-blue-950 h-20 md:h-24 w-full shadow-md fixed md:relative z-20">
        <ul className="hidden md:flex justify-center items-center gap-4 w-full">
          <div className="flex flex-1 !gap-4 justify-end">
            {menuItems.slice(0, 3).map(mi => (
              <li key={mi.url}>
                <Link className="desktop !py-2" to={mi.url}>{mi.name}</Link>
              </li>
            ))}
          </div>
          <Link className="desktop no-after !m-auto" to="/">
            <img className="h-20 w-20 !mx-4" src="/assets/images/website/sk-logo.png" />
          </Link>
          <div className="flex flex-1 !gap-4">
            {menuItems.slice(3, 5).map(mi => (
              <li key={mi.url}>
                <Link className="desktop !py-2" to={mi.url}>{mi.name}</Link>
              </li>
            ))}
          </div>
        </ul>
        <div className="flex items-center justify-between md:hidden w-full px-4">
          <Link to="">
            <img src="/assets/images/website/sk-logo.png" className="h-16 w-16" />
          </Link>
          <button className="h-12 w-12 !p-2 hover:cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <img src="/assets/images/website/burger-bar.png" className="h-full w-full" />
          </button>
        </div>

      </nav>
      <div className={`!flex md:hidden !w-60 !h-screen !fixed z-40 transition-all duration-[400ms] bg-slate-300 !mt-20 ${isMobileMenuOpen ? '!shadow-md !right-0' : '!-right-full'}`}>
        <ul className="w-full flex flex-col">
          <li key="home" className="w-full">
            <Link className={`mobile !p-4 block ${active === '/' ? 'font-bold' : ''}`} to="/">
              Home
            </Link>
          </li>
          {menuItems.map(mi => (
            <li key={mi.url} className="w-full">
              <Link className={`mobile !p-4 block ${active === mi.url ? 'font-bold' : ''}`} to={mi.url}>
                {mi.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default NavMenu;