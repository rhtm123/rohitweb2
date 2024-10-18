import { useTheme } from 'next-themes'

import { RiYoutubeLine } from "react-icons/ri";

import { RiInstagramLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";


function Footer() {
  const { theme, setTheme } = useTheme();


    return (
        <footer className="flex justify-between bg-base-300 py-2 px-4 md:px-8" >
  <aside>
    <div className='py-2'>
      <span>Select Theme: </span>
      <select className="select select-sm" value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="light">light</option>
        <option value="cupcake">Cupcake</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  </aside> 
  <nav>
  <div className="flex items-center gap-2">
      <a href="https://www.youtube.com/@CodingChaska" target="_blank">
        <RiYoutubeLine className="hover:text-primary" size={36} />
        </a> 

        <a target="_blank" href="https://www.instagram.com/codingchaskaofficial/">
      <RiInstagramLine className="hover:text-primary" size={30} />
        
      </a>
      <a href="https://x.com/CodingChaska" target="_blank">
      <RiTwitterXLine className="hover:text-primary" size={28} />

        </a> 

    </div>
  </nav>
</footer>
    )
}

export default Footer