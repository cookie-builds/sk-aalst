import { Link } from "react-router-dom";

const Footer = () => (
  
  <footer className="flex flex-col justify-center items-center gap-10 !p-4 !pt-16 bg-blue-950 text-white shadow-lg">
    <div className="flex flex-col md:flex-row justify-between items-start max-w-5xl w-full gap-4 md:gap-16">
      <Link to="/">
        <img src="/assets/images/website/sk-logo.png" className="h-32 w-32 object-contain" />
      </Link>
      <div className="flex flex-col gap-4">
        <h3 className="font-extrabold text-xl">Links</h3>
        <ul className="flex flex-col gap-2">
          <li>Mail:&emsp;<a href="mailto:skaalst.student@outlook.com" target="_blank" className="font-semibold text-yellow-500">skaalst.student@outlook.com</a></li>
          <li>Instagram:&emsp;<a href="https://www.instagram.com/skaalst/" target="_blank" className="font-semibold text-yellow-500">@skaalst</a></li>
          <li>Facebook:&emsp;<a href="https://www.facebook.com/SKAalst" target="_blank" className="font-semibold text-yellow-500">SK Aalst</a></li>
        </ul>
      </div>
    </div>
    <div>
      © 2024 - Website gemaakt door Jonathan Couck
    </div>
  </footer>
);

export default Footer;