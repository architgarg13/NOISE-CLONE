


function Footer() {
  return <div className='max-w-6xl mx-auto'>
      <img className=' m-5' alt="" src="https://cdn.shopify.com/s/files/1/0997/6284/files/Layer_2_d16a613a-e75b-4de0-a476-aa0d107a7ef8_180x.png?v=1639078444" />
      <div className=" lg:flex lg:flex-row-reverse">
      <div className=" mx-5 lg:hidden"> 
          <div className=" border-b-2 my-3 py-4 text-lg font-medium">
             <p>Our Products</p>
          </div>
          <div className=" border-b-2 my-3 py-4 text-lg font-medium">
             <p>For business</p>
          </div>
          <div className=" border-b-2 my-3 py-4 text-lg font-medium">
             <p>Support</p>
          </div>
          <div className=" border-b-2 my-3 py-4 text-lg font-medium">
             <p>About noise</p>
          </div>
          <div className=" border-b-2 my-3 py-4 text-lg font-medium">
             <p>Legal</p>
          </div>
      </div>
      <div className=" mx-5 my-8 border-b-2 lg:w-[20%] lg:border-none">
          <p className=" font-medium text-xl my-6 cursor-pointer">Follow Us</p>
          <div className=" flex text-center my-5">
            <i class="fab fa-facebook-f fa-lg w-8 border-2 border-black p-1.5 mr-2 rounded-full hover:bg-black hover:text-white hover:-translate-y-1"></i>
            <i class="fab fa-instagram fa-lg w-8 border-2 border-black py-1 mx-2 rounded-full hover:bg-black hover:text-white hover:-translate-y-1"></i>
            <i class="fab fa-youtube fa-lg w-8 border-2 border-black py-1 mx-2 rounded-full hover:bg-black hover:text-white hover:-translate-y-1"></i>

          </div>
      </div>
      </div>
      
      
      <div className="text-center text-xs mb-16">
              <p>Copyright © 2021, Noise. All Rights Reserved.</p>
          </div>
  </div>;
}

export default Footer;
