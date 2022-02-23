

function Contact() {
  return <div className=" bg-[#e0dfff] w-full h-[70vh] text-center flex flex-col">
      <h1 className=" font-normal text-2xl mx-auto my-8 pt-16 text-[#505af0] ">Keep up with the noise</h1>
      <p className="mx-10 mb-5 p-4">Sign up now to hear about our latest offers, new products, collaborations, all things Noise - Straight to your inbox.</p>
      <input type="text" placeholder="Enter your Email" className=" max-w-[70%] bg-[#e0dfff] placeholder:text-[#505af0] placeholder:text-lg border-2 border-[#505af0] mx-auto p-3 px-9 rounded-lg text-center" />
        <button className="bg-[#505af0] my-10 mx-auto border-2 px-8 py-2 rounded-3xl w-[10rem] hover:opacity-50 border-[#505af0] text-white"> Sign Up </button> 
  </div>;
}

export default Contact;
