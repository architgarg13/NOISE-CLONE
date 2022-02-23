
import {MenuIcon ,SearchIcon ,ShoppingCartIcon ,UserIcon} from '@heroicons/react/outline'
function Navbar() {
  return <div className=' sticky bg-black  h-14 w-full flex py-2 place-content-evenly text-center '>
      <div className=' h-10 w-10 text-white mx-5 mt-1 cursor-pointer lg:hidden'>
        <MenuIcon />
      </div>
      <div className='h-10 w-full  lg:basis-1/4 hover:-translate-y-0.5 '>
        <img className='h-[90%] w-32 mx-auto cursor-pointer' alt="" src="https://cdn.shopify.com/s/files/1/0997/6284/files/Frame_5cedad94-02ea-41c0-8358-07c2b789f67e.png?v=1634232985"/>
      </div>
      <div className='hidden  font-light text-lg lg:flex basis-2/4 w-full lg:visible text-white'>
         <div className='mx-auto flex max-w-[50%]'>
         <p className='mx-5 -mb-3 mt-1 px-2cursor-pointer hover:border-b-4 hover:text-gray-300 hover:transition delay-100 duration-50 ease-in-out hover:-translate-y-1 '>Products</p>
          <p className='mx-5 -mb-3 mt-1 px-2 cursor-pointer hover:border-b-4 hover:text-gray-300 hover:transition delay-100 duration-50 ease-in-out hover:-translate-y-1  '>Support</p>
          <p className='mx-5 -mb-3 mt-1 px-2 cursor-pointer hover:border-b-4 hover:text-gray-300 hover:transition delay-100 duration-50 ease-in-out hover:-translate-y-1  '>Stories</p>
             </div> 
      </div>
      <div className='flex lg:basis-1/4 pt-1 '>
        <SearchIcon className=' h-8 w-8 text-white mx-3 cursor-pointer lg:basis-1/3 hover:-translate-y-0.5 '/>
        <ShoppingCartIcon className=' h-8 w-8 text-white mx-3 cursor-pointer lg:basis-1/3 hover:-translate-y-0.5 '  />
        <UserIcon  className=' h-8 w-8 text-white mx-3 hidden cursor-pointer lg:basis-1/3 lg:flex hover:-translate-y-0.5 '  />
      </div>
  </div>;
}

export default Navbar;
