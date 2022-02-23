import Link from "next/link";


function Banner() {
  return <div>
      <div className=" w-full max-h-30 my-3 ">
            <Link href="https://www.gonoise.com/products/noise-noisefit-icon-buzz-smartwatch" >
                <img alt="" className=" cursor-pointer" src="https://cdn.shopify.com/s/files/1/0997/6284/files/image_2022_02_01T14_51_58_977Z_1_1500x.png?v=1643826995" />
            </Link>
      <img alt="" className=" cursor-pointer mx-auto my-20 w-full" src="https://cdn.shopify.com/s/files/1/0997/6284/files/Artboard_1_1_0d85359a-1375-4183-a9ed-c8928da84ac6_1500x.png?v=1639140371"/>
    </div>
      </div>;
}

export default Banner;
