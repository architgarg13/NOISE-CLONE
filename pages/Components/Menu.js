import Card from "./Card";


function Menu() {
  return <div className=" flex flex-col w-[95%] h-full mx-auto">
      <div className="flex max-w-full h-[100%] text-center">
        <div className=" bg-cream-pink grow-1/2 mx-5 rounded-2xl cursor-pointer hover:-translate-y-1 w-full ">
          <Card img="https://cdn.shopify.com/s/files/1/0997/6284/files/Mask_Group_7_180x.png?v=1612690910" name="Wireless Earbuds" /> 
        </div>
        <div className=" bg-cream-yellow grow-1/2 w-full rounded-2xl mx-5 cursor-pointer hover:-translate-y-1 ">
        <Card img="https://cdn.shopify.com/s/files/1/0997/6284/files/banner_6dfd25d2-894e-41bf-b2aa-7e133ddabdf7_180x.png?v=1628860894" name="Smart Watches" />
        </div>
      </div>
      <div className="flex max-w-[100%] h-[100%] my-8 text-center flex-col lg:flex-row   ">
          <div className="bg-cream-purple  mx-3 my-5 rounded-2xl  cursor-pointer shrink hover:-translate-y-1 lg:w-full">
          <Card img="https://cdn.shopify.com/s/files/1/0997/6284/files/Mask_Group-3_d51a1e9a-a1f0-4bbf-838d-322f6ee4272b_180x.png?v=1612690782" name="Bluetooth Earphones" />
          </div>
          <div className="bg-cream-skin  my-5 mx-3 rounded-2xl cursor-pointer shrink hover:-translate-y-1 lg:w-full">
          <Card img="https://cdn.shopify.com/s/files/1/0997/6284/files/image_204_6d6bb6b2-e760-4a06-9159-2fbdfdb31d39_180x.png?v=1639076001" name="Headphones" />
          </div>
          <div className="bg-cream-green  my-5 mx-3 rounded-2xl  cursor-pointer shrink hover:-translate-y-1 lg:w-full ">
          <Card img="https://cdn.shopify.com/s/files/1/0997/6284/files/Noise_Smart_Wearables_Accessories_180x.png?v=1613499955" name="Accessories" />
          </div>
      </div>
  </div>;
}

export default Menu;
