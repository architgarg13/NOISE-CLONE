

function Card({img,name}) {
  return <div>
             <h1 className=" text-3xl my-7 font-medium">{name}</h1>
            <img className=" mx-auto mt-14 mb-5" alt="" src={img} />
  </div>;
}

export default Card;
