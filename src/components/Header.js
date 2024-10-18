import Link from "next/link";
import { FaRegLightbulb } from "react-icons/fa6";


function Header(){


    return (
<div className="navbar bg-base-200">
  <div className="flex-1 md:px-2">
    <Link href="/" className="text-2xl font-semibold flex items-center hover:text-primary">

      <img className="w-12" src="/logot.png" alt="Rohit Maurya Website" />
      <span className="pl-2">
      Rohit Maurya
      </span>
    
    </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className="border border-primary rounded-lg">
        <Link href="/thoughts">My Thoughts <FaRegLightbulb /> </Link>
      </li>
    
    </ul>
  </div>
</div>
    )
}

export default Header