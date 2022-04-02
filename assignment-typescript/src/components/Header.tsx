import React from 'react'
import Seach from './Seach'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <div>
                <div className="header-top flex justify-between h-[80px] w-[1200px] m-auto">
                    <figure className="logo pt-4">
                        <a href="/">
                            <img src="https://media.designrush.com/inspirations/129360/conversions/_1513770087_98_chanel1-preview.jpg" width="94px" />
                        </a>
                    </figure>
                    <div>
                        <ul className="w-[700px] mt-10 pl-10 mb-[20px] flex ">
                            <li><a className="px-[20px] no-underline color-black text-black font-bold hover:underline   " href="/">Trang Chủ</a></li>
                            <li><a className="px-[20px] no-underline color-black text-black font-bold hover:underline" href="/products">Sản Phẩm</a></li>
                            <li><a className="px-[20px] no-underline color-black text-black font-bold hover:underline" href="/blog">Bài Viết</a></li>
                            <li><a className="px-[20px] no-underline color-black text-black font-bold hover:underline" href="/">Liên Hệ</a></li>

                        </ul>
                    </div>
                    <div className="flex mt-4 text-center checksn">
                        <div className="signin pl-5 ">
                            <ul className="flex">
                                <span className="sm:ml-3">
                                    <a href="/signup" className="no-underline">
                                        <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Signup </button>
                                    </a>
                                </span>
                                <span className="sm:ml-3 ">
                                    <a href="/signin" className="no-underline">
                                        <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Signin</button>
                                    </a>
                                </span>
                            </ul>
                        </div>
                    </div>
                </div >
                <div className="bg-orange-100">
                    <div className="header-top bg-orange-100 flex justify-between h-[80px] w-[1200px] mx-32">
                        <div className="nav pt-4">
                            <div>
                                <button className="bg-red-700 text-white hover:bg-stone-900 ml-[30px] px-[20px] py-[8px] ">Danh Mục</button>
                            </div>
                        </div>
                        <form action="/search" className="w-[700px] mt-4 pl-10 flex ">
                            <input type="text" className="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên nước hoa cần tìm" name="keyword" />
                            <div>
                                <button className="bg-sky-900 text-[#ffffff] hover:bg-sky-700 px-[20px] py-[8px] rounded-r-lg">Tìm kiếm</button>
                            </div>
                        </form>
                        <div className="flex mt-4 text-center ">
                            <div className="signin pl-5">
                                <ul className="flex">
                                    <a href="/#//cart" className="no-underline">   <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-stone-900">Giỏ Hàng </button></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >



        </>

    )
}

export default Header