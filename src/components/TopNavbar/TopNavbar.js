import { useSelector } from "react-redux";
import TopNavbarItem from "../TopNavbarItem/TopNavbarItem";
const TopNavbar = () => {
    const openFrame = useSelector(state => state.openFrame.opened)

    return (
        <div className='navbar-top'>
            {
                openFrame.map((frame, index) => <TopNavbarItem key={index} id={frame.id} name={frame.name}/>)
            }
            
        </div>
    )
}

export default TopNavbar;