import React, { useContext, useEffect, useRef, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { ProductContext } from '../contexts/ProductContext';
import { DeleteBtn } from '../shared/DeleteBtn';


const initialState = {
        name: "",
        brand: "",
        category: "",
        price: "",
        oldPrice: "",
        quantity: "",
        description: "",
        image: ""
        
    }

export const CreateProduct = () => {
    const [formData, setFormData] = useState(initialState);
    const {name, brand, category, price, oldPrice, quantity, description, image} = formData 
    const {createProduct} = useContext(ProductContext)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState()
    const formRef = useRef()

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value})
    }

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    //createProduct
    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const productData = {
                name,
                brand,
                category, price, oldPrice, quantity, description,image
            }
            await createProduct(productData)
            toast.success("product created successfully")
            setLoading(false)
            scrollToTop()
            location.reload()
        } catch (error) {
            setErrorMsg(error.message)
            console.log(error.message)
            toast.error(error.message) 
            setLoading(false)
        }
    }

  

  return (
    <div className="flex justify-center bg-brown3">
        <form ref={formRef} onSubmit={handleSubmit} className=" w-full flex flex-col items-center mx-[2%] md:mx-[10%] lg:mx-[20%] md:px-10 bg-white  md:my-10 rounded ">
            <label htmlFor="" className="font-bold p-2 md:p-7 text-base md:text-2xl " >
                Create a new Product
            </label>
            <div className='text-red'>{errorMsg && errorMsg}</div>
            <div className="items-center p-3 w-full space-y-4">
                <div className="">
                    <label  htmlFor="name" className="absolut inputLabel bg-gree">Product name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        id=""
                        placeholder="Enter name"
                        className="inputField w-full p-3 outline-none border border-gray/10 rounded"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="">
                    <label htmlFor="name" className="block">
                        Select Category:
                    </label>
                    <select
                        name="category"
                        id=""
                        className="p-3 border border-gray/10 rounded outline-none w-full"
                        onChange={handleChange}
                        required
                    >
                        <option value="All">-select-</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="unisex">Unisex</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="name">Brand</label>
                    <input
                        type="text"
                        name="brand"
                        value={brand}
                        id=""
                        placeholder="Enter product brand"
                        className="w-full p-3 outline-none border border-gray/10 rounded"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="">
                    <label htmlFor="name">Price</label>
                    <input
                        type="text"
                        name="price"
                        value={price}
                        id=""
                        placeholder="Enter product price"
                        className="w-full p-3 outline-none border border-gray/10 rounded"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="">
                    <label htmlFor="name">Old Price</label>
                    <input
                        type="text"
                        name="oldPrice"
                        value={oldPrice}
                        id=""
                        placeholder="Enter product price"
                        className="w-full p-3 outline-none border border-gray/10 rounded"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="">
                    <label htmlFor="name">Quantity</label>
                    <input
                        type="text"
                        name="quantity"
                        value={quantity}
                        id=""
                        placeholder="Enter product quantity"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                        className="w-full p-3 outline-none border border-gray/10 rounded"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="name">Description</label>
                    <textarea 
                            name="description" 
                        value={description} id="" cols="10" rows="5" 
                        placeholder="Enter product description" 
                        className="border border-gray/20 rounded outline-none p-2"
                        onChange={handleChange}
                        required
                        >
                        
                    </textarea>
                </div>
                <div className="space-y-2">
                    <label htmlFor="name" className='flex items-center'>Select Image <AiOutlinePlus className='mt-1'/></label>
                    <input
                        type="text"
                        name="image"
                        value={image}
                        id=""
                        placeholder="Paste the image url"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                        className="w-full p-3 outline-none border border-gray/10 rounded"
                        onChange={handleChange}
                        required
                    />
                    {
                        image && (

                        <p className='h-20 w-20 pt-2'>
                            <img src={image} alt="image"  className='object-fit h-full w-full'/>
                        </p>
                        )
                    }
                </div>
        
                <div className="flex justify-end md:py-2 gap-3">
                    <button disabled={loading} type="submit" className="w-full bg-lightBrown text-ivory md:p-3 p-2 rounded shadow hover:shadow-lg hover:bg-opacity-90 hover:font-semibold">{loading ? 'Please Wait...' : "Create"}</button>
                    <div className='w-[45%] md:w-[30%]'>
                        <DeleteBtn text="Clear form"/>
                    </div>
                </div>
            </div>
        </form>
    </div>    
  )
}
