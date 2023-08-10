import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
import { CardUser } from '@/components/Card'
import { useEffect } from 'react'
import { supabase } from '@/database/Database'
export default function Home() {
  const [name ,Setname] = useState("")
const [Description , SetDescription] = useState("")
const [price , SetPrice] = useState("")
const [products , SetProducts] =useState([])
useEffect(()=>
{
  get_products()
},[])
async function get_products ()
{
  try {
    
    const {data , error } = await supabase.from("products").select("*").limit(10)
    console.log("data",data)
    if(data != null)
    {
      SetProducts(data)
      console.log(products)
      products.map((data)=>
      {
         console.log( "Product Id :" + data.id + "\n" + " Product Name  : " + data.name + "\n" + "Product Price :" + data.price +  "\n" + "Product Description" + data.description)

      })
    }
  } catch (error) {
    alert(error.message)
  }
}

async function insert_products()
{
  try {
    
    const {data , error } = await supabase.from("products").insert({
      name : name ,
      price : price ,
      description : Description

    })
    console.log("data",data)
  window.location.reload()
  } catch (error) {
    alert(error.message)
  }
}


  return (
             <div className='flex flex-col w-screen h-screen  bg-neutral-950 '>
              <div className='flex flex-col w-full h-3/5 justify-end items-center '>
              <div className='flex flex-col w-2/5 h-4/5  rounded-3xl justify-center items-center bg-neutral-950 shadow-md  shadow-slate-400'>

                <div className='flex flex-col justify-evenly w-3/5 h-full '>
              <div className="relative w-full   flex-row   justify-evenly items-center">
              <input
                type="text"
                id="name"
                name="p_name"
                onChange={(e)=>Setname(e.target.value)}
                value={name}
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
                value={price}
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
                value={Description}
                className=" input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#4E4E4E] h-10 w-full border border-double  border-white focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3 "
                placeholder="Product Description"
              
              />
              <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                Product Description
              </label>
             
            </div>
            <div className="relative w-full   flex-row flex  justify-center  ">
            <button
              className={` rounded-md     w-52 h-10 text-lg font-semibold btn  bg-[#747474]  border-[#4E4E4E]  text-white hover:bg-[#FFFFFF]  hover:border-[#4E4E4E] hover:text-black "`}
              onClick={insert_products}
              type="submit"
            >
              {" "}
              Add Product <br />
            </button>
            </div>
              </div>
              </div>
              
              <div>
              
              </div>
              </div>
              
              <div className='flex flex-col justify-evenly items-center pl-48  '>
              <div className='grid grid-cols-4  w-5/6 '>
              {products.map((product) => (
                <div className="" key={product.id} >
                  {
                    <div className='mt-4'> 
                      <CardUser product = {product} />
                     </div>

                  }
                </div>
              ))} 
         
              </div>
              </div>
             </div>
  )
}
