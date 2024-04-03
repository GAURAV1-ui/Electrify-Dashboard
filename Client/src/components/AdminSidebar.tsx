import { Link, Location, useLocation } from "react-router-dom";

const AdminSidebar = () => {
    const location = useLocation();
  return (
    <aside>AdminSidebar</aside>
  )
}

interface LiProps {
    url : string,
    text: string,
    location:Location,
}

const Li = ({url, text, location, Icon}:Liprops) => {
    <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
      }}
    >
      {text}
    </Link>
  </li> 
}

export default AdminSidebar