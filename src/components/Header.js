import Link from "next/link"

function Header(){


    return (
<div className="navbar bg-base-200">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Rohit Maurya</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link href="/thoughts">Thoughts</Link>
        </li>
    
    </ul>
  </div>
</div>
    )
}

export default Header