import React from 'react'

type Props = {}

const Bottom = (props: Props) => {
    return (
        <>
            <div>
                <div className=" w-[1200px] m-auto grid grid-cols-4 bg-orange-100  gap-[20px] ">
                    <div className="w-[320px] px-[20px] ">
                        <div>
                            <img src="https://media.designrush.com/inspirations/129360/conversions/_1513770087_98_chanel1-preview.jpg" className=" p-4" />
                        </div>
                        <div>
                            <div className="footer_newslet">
                                <h6 className="font-semibold pb-[10px] text-center">MÙI HƯƠNG THỂ HIỆN PHONG CÁCH</h6>
                                <form className="footernews_form">
                                    <input type="text" placeholder="Your email address" className="py-[10px] rounded-lg bg-none" />
                                    <a href="#">
                                        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Signin</button>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="intro ml-[40px]">
                        <div>

                            <h4 className="font-bold leading-8 mt-4  ">MY ACCOUNT</h4>
                        </div>
                        <div className="pt-[10px] leading-8">
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Orders</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Wishlist</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Track Order</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Manage Account</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Return Order</a></p>
                        </div>
                    </div>
                    <div className="intro px-[20px]">
                        <div>

                            <h4 className="font-bold leading-8 mt-4 ">INFORMATION</h4>
                        </div>
                        <div className="pt-[10px] leading-8">
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">About Us</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Return Policy</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Terms &amp; condition</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Privacy Policy</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">
                                FAQ</a></p>
                        </div>
                    </div>
                    <div className="intro px-[20px]">
                        <div>
                            <h4 className="font-bold leading-8 mt-4 ">CONTACT</h4>
                        </div>
                        <div className="pt-[10px] leading-8">
                            <p  className="no-underline text-purple-600 hover:text-red-500">Tòa nhà FPT Polytechnic, P. Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội</p>
                            <p className="no-underline text-purple-600 hover:text-red-500">Phone :+123 456 789, +777 888 999</p>
                            <p  className="no-underline text-purple-600 hover:text-red-500">Email : vandthph13979@fpt.edu.vn</p>
                        </div>
                    </div>
                </div>
                <div className="py-3 bg-[#2b2d42] text-center text-xs text-[#ffffff]">
                    <p>© CHANEL - All Rights Reserved</p>
                </div>
            </div>


        </>
    )
}

export default Bottom