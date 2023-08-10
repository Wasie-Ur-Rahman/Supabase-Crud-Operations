import { useState } from "react";
import { supabase } from "@/database/Database";
export const CardUser = (props) => {
    const products = props.product
    console.log("product",products)
const [edit , setEdit] = useState(false)
const [name ,Setname] = useState(products.name)
const [Description , SetDescription] = useState(products.description)
const [price , SetPrice] = useState(products.price)


async function delete_products()
{
  try {
    
    const { error } = await supabase
  .from('products')
  .delete()
  .eq('id', products.id)
  window.location.reload()
  } catch (error) {
    alert(error.message)
  }
}
async function update_products()
{
  try {
    
    const { error } = await supabase
  .from('products')
  .update(
    {
        name : name , 
        price : price , 
        description : Description 
    }
  )
  .eq('id', products.id)
  setEdit(false)
  window.location.reload()

  } catch (error) {
    alert(error.message)
  }
}
    return (
        <div className=" shadow-md dark:shadow-gray-800 shadow-gray-400 dark:bg-black bg-gray-200  dark:border-gray-900 border-gray-600 h-[20rem] w-[10rem] 2xl:w-[16rem] rounded-2xl  border border-opacity-20 ">
    
                <div className="space-y-0 md:space-y-1 pl-8 pt-3 md:pl-10 md:pt-4">

                    {edit == false ?
                    <>
                    <div className="space-y-3">
                    
                      <div className="dark:text-white text-black text-lg "><label className="font-extrabold">Id : </label>{products.id}</div>
                    <div className="dark:text-white text-black text-lg"><label className="font-extrabold">Name : </label>{products.name}</div>
                    <div className="text-gray-600 text-lg "><label className="font-extrabold text-black">Price : </label>{products.price}</div>
                    <div className="text-gray-600 text-lg "><label className="font-extrabold text-black">Description : </label>{products.description}</div>
                    
                    <button
              className={` rounded-md     w-52 h-10 text-lg font-semibold btn  bg-[#747474]  border-[#4E4E4E]  text-white hover:bg-[#FFFFFF]  hover:border-[#4E4E4E] hover:text-black "`}
               onClick={()=>setEdit(true)}
              type="submit"
            >
              {" "}
              Edit Product <br />
            </button>
            <button
              className={` rounded-md     w-52 h-10 text-lg font-semibold btn  bg-[#747474]  border-[#4E4E4E]  text-white hover:bg-[#FFFFFF]  hover:border-[#4E4E4E] hover:text-black "`}
             onClick={delete_products}
              type="submit"
            >
              {" "}
              Delete Product <br />
            </button>
            </div>
            </>
            :
            <>
            
          
            <div className='flex flex-col justify-evenly items-center w-full h-full space-y-10 '>
         

              <div className="relative w-full   flex-row  justify-evenly items-center ">
              <input
                type="text"
                id="name"
                name="p_name"
                onChange={(e)=>Setname(e.target.value)}
                defaultValue={products.name}
                className=" input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#4E4E4E] h-10 w-full border border-double  border-white focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3 "
                placeholder="Product Name"
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Product Name
              </label>
             
            </div>
            <div className="relative w-full   flex-row  justify-center  ">
              <input
                type="text"
                id="price"
                name="p_price"
                onChange={(e)=>SetPrice(e.target.value)}
                 defaultValue={products.price}
                className=" input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#4E4E4E] h-10 w-full border border-double  border-white focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3 "
                placeholder="Product Price"
             
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Product Price
              </label>
             
            </div>

            <div className="relative w-full   flex-row  justify-center  ">
              <input
                type="text"
                id="description"
                name="p_description"
                onChange={(e)=>SetDescription(e.target.value)}
             defaultValue={ products.description}
                className=" input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#4E4E4E] h-10 w-full border border-double  border-white focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3 "
                placeholder="Product Description"
              
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Product Description
              </label>
             
            </div>
            <div className="relative w-full   flex-row flex  justify-center  ">
           
            </div>
              </div>
              <button
              className={` rounded-md     w-52 h-10 text-lg font-semibold btn  bg-[#747474]  border-[#4E4E4E]  text-white hover:bg-[#FFFFFF]  hover:border-[#4E4E4E] hover:text-black "`}
      
              type="submit"
              onClick={update_products}
            >
              {" "}
              Done <br />
        
            </button>
            </>
}
                 
                </div>
           
        </div>
    );
};