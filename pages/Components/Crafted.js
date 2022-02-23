import { ShieldCheckIcon ,TruckIcon, CurrencyDollarIcon ,ClipboardCheckIcon} from '@heroicons/react/outline'
function Crafted() {
  return <div className=" max-w-6xl mx-auto bg-[#fafafa] my-16 border-y-2 p-5 text-center">
      <h1 className=' text-3xl font-semibold my-5'>Crafted for your inner 'Noise'</h1>
      <p className=' text-sm my-6'>Founded in 2018, Noise is the leading Indian connected lifestyle brand that is changing the way India remains connected and building India's largest and most active buoyant lifestyle community. With its remarkable range of best-in-class smart hearables and wearables Noise has also been awarded India’s No.1 wearable watch brand in 2020 by IDC Worldwide Wearable Device Tracker. Smart products with the latest features make Noise the right brand for your music and fitness needs.</p>
        <div className="flex text-center w-full justify-evenly">
            <div >
                <ShieldCheckIcon className='w-[5rem] h-[5rem]' />
                <p className=' w-[5rem] p-2'>Safe Shopping</p>
            </div>
            <div>
                <TruckIcon className='w-[5rem] h-[5rem]' />
                <p className=' w-[5rem] p-2'>Free Shipping</p>
            </div>
            <div>
                <CurrencyDollarIcon className='w-[5rem] h-[5rem]'/>
                <p className=' w-[5rem] p-2'>Inclusive Pricing</p>
            </div>
            <div>
            <ClipboardCheckIcon className='w-[5rem] h-[5rem]' />
                <p className=' w-[5rem] p-2'>Trusted Products</p>
            </div>
        </div>
  </div>;
}

export default Crafted;
