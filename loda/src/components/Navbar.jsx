import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Search,LogOut,Menu} from 'lucide-react'
import { useAuthStore } from '../store/authUser';
import { useContentStore } from '../store/content';
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
     const {user,logout} =useAuthStore();
    const toggle =()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    const{contentType, setContentType} = useContentStore();
    console.log("contentType:",contentType);
    return <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
        <div className='flex items-center gap-10 z-50' >
            {/* logo */}
            <Link to={"/"}> <img src="netflix-logo.png" alt="logo" className='w-32 sm:w-40' /> </Link>
            {/* desktop navbar */}
            <div className= 'hidden sm:flex gap-2 item-center' >
                <Link to={"/"} className=' hover:bg-gray-800' onClick={() => setContentType("movie")} >Movies</Link>
                <Link to={"/"} className=' hover:bg-gray-800' onClick={() => setContentType("tv")} >Tv Shows</Link>
                <Link to={"/history"} className=' hover:bg-gray-800'  >Search History</Link>
            </div>
        </div>
        <div  className='flex gap-2 items-center z-50'>
            <Link to={"/search"}>
            <Search className='size-6 cursor-pointer' ></Search>
            </Link>
            <img src={user.image} alt='Avatar' className='h-6 rounded cursor-pointer' ></img>
            <LogOut className='size-6 cursor-pointer' onClick={logout}/>

            <div className='sm:hidden' >
                <Menu className='size-6 cursor-pointer' onClick={toggle}/>
            </div>
        </div>
        {/* mobile navbar */}
        {isMobileMenuOpen && (
            <div className='w-full sm:hidden mt-4 z-50 bgblack border rounded border-gray-800'>
                <Link to={"/"} className='block p-2 hover:bg-gray-800' onClick={toggle}>Movies</Link>
                <Link to={"/"} className='block p-2 hover:bg-gray-800' onClick={toggle}>Tv Shows</Link>
                <Link to={"/history"} className='block p-2 hover:bg-gray-800' onClick={toggle}>Search History</Link>
            </div>
        )}
        </header>
};
export default Navbar;