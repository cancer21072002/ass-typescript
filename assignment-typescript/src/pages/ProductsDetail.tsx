import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/products';
import { ProductType } from '../types/Product';


type Props = {

}

const ProductsDetail = (props: Props) => {
    const { id } = useParams();

    const [product, setProduct] = useState<ProductType>();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            setProduct(data)

        };
        getProduct();
    }, [])
    return (
        // <div className="m-auto">

        //     <h1>{product?.name}</h1>
        //     <img src={product?.img} ="" />
        //     <p>{product?.price}</p>
        // </div>
        <article className=" mx-auto w-[1200px] ">
            <div className="mx-auto w-[1200px] my-10">
                <div className="grid grid-cols-2 mb-3">
                    <h2 className="font-bold text-xl ">{product?.name}</h2>
                    <div className="mt-2 flex justify-end">
                        <a href="" className="mt-1">
                            <ul className="flex ">
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
                                    </svg>
                                </li>
                            </ul>
                        </a>
                        <a href="" className="ml-2 text-sky-600 hover:underline relative hover:font-semibold">13 đánh giá</a>
                        <a href="" className="ml-1 text-sky-600 hover:underline relative hover:font-semibold">| 4110 Hỏi &amp; đáp</a>
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-2 mt-7">
                    <div className="mr-3">
                        <div className="border-[1px]">
                            <a href="">
                                <img src={product?.img} />
                            </a>
                        </div>
                        <div className="flex flex-row justify-center">
                            <a href="" className="mt-3 text-center hover:font-bold">
                                <img className="phone-color" src="https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-8848376856606.jpg" />
                                <p className="ml-3">Mùi ngọt ngào</p>
                            </a>
                            <a href="" className="mt-3 text-center hover:font-bold ml-3">
                                <img className="phone-color " src="https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-8848376856606.jpg" />
                                <p className="ml-3">Mùi tươi mát</p>
                            </a>
                            <a href="" className="mt-3 text-center hover:font-bold ml-3">
                                <img className="phone-color" src="https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-8848376856606.jpg" />
                                <p className="ml-3">Mùi quyến rũ</p>
                            </a>
                            <a href="" className="mt-3 text-center hover:font-bold ml-3">
                                <img className="phone-color" src="https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_620/n-5-eau-de-parfum-spray-3-4fl-oz--packshot-default-125530-8848376856606.jpg" />
                                <p className="ml-3">Mùi sảng khoái</p>
                            </a>
                        </div>
                        <div className="flex mt-3 justify-center">
                            <div className="flex mr-2">
                                <i className="fas fa-award text-red-700  mr-2" />
                                <p className="text-sm">Hàng chính hãng </p>
                            </div>
                            <div className="flex">
                                <i className="fas fa-shipping-fast text-red-700  mr-2" />
                                <p className="text-sm">Giao hàng toàn quốc</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="flex ">
                            <span className="text-red-700 font-semibold text-2xl mr-5 mt-2">$ {product?.price} </span>
                            <span className="font-semibold text-lg line-through mt-3">30.000₫</span>
                           
                        </div>
                        <div className="mt-2 bg-slate-100 grid grid-cols-4 rounded-md">
                            <label className="radio">
                                <input type="radio" className="form-radio" name="GB" />
                                <span className="ml-1 font-bold">Mùi sảng khoái</span>
                                <span className="block">2.800.000₫</span>
                            </label>
                            <label className="radio">
                                <input type="radio" className="form-radio" name="GB" />
                                <span className="ml-1 font-bold">Mùi quyến rũ</span>
                                <span className="block">3.000.000₫</span>
                            </label>
                            <label className="radio">
                                <input type="radio" className="form-radio" name="GB" />
                                <span className="ml-1 font-bold">Mùi tươi mát</span>
                                <span className="block">2.990.000₫</span>
                            </label>
                            <label className="radio">
                                <input type="radio" className="form-radio" name="GB" />
                                <span className="ml-1 font-bold">Mùi ngọt ngào</span>
                                <span className="block">3.500.000₫</span>
                            </label>
                        </div>
                        <div className="box-Promo">
                            <div className="endow py-[20px]">
                                <span className="bg-[#e9ecef] px-3 font-bold">Ưu đãi thêm</span>
                            </div>
                            <ul className="content-promo">
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Tặng thêm 1 chai body mist dung lượng: 1000ml
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Giảm sốc 50% cho đơn chỉ từ 2.550.000đ
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                             đổi trả nếu là hàng giả 
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Uy tín - Chất lượng
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Tặng body mist Mùi sảng khoái 200.000đ 
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Tặng body mist Mùi quyến rũ 300.000đ 
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Cơ hội trúng các phần quà trị giá lên tới 2 triệu đồng
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="btn-buy ">
                            <button className="w-full bg-red-700 mt-4 rounded-md text-white hover:bg-red-800" id="btnAddToCart">
                                <div>
                                    <strong>MUA NGAY</strong>
                                </div>
                                <p className="text-sm">Giao hàng miễn phí hoặc nhận tại shop</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="uppercase text-[16px] font-bold border-b-[1px] mt-2 pl-1"> Thông tin chi tiết sản phẩm </h1>
                <p className="text-[14px] leading-[1.8] mb-3"> ${'{'}data.details{'}'}
                </p>
            </div>
            <div className="conten my-[20px]">
                <h1 className="font-bold text-[20px] py-[20px]">New Arrivals</h1>
                <div className="product grid grid-cols-4 gap-5 ">
                    <form action="">
                        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div className=" w-[100%] ">
                                <a href="#"> <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/07/23/apple-tiep-tuc-thong-tri-thi-truong-may-tinh-bang.jpg" /></a>
                            </div>
                            <div className="py-[10px] px-[10px] leading-8">
                                <a href="#" className="no-underline">
                                    <h4 className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">EAU DE PARFUM DẠNG TWIST AND SPRAY</h4>
                                </a>
                                <p className="text-[15px] text-[red]">$1.300</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div className="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div className=" w-[66%]  m-auto ">
                                <a href="#"> <img src="https://image.made-in-china.com/202f0j00KZUiGpwMLhos/M9-Plus-7-0inch-12g-512g-24MP-Cheap-Smart-Phones-4G-Mobile-Android-Cell-Phones-Lowest-Price-Mobail-Phone.webp" height="100px" /></a>
                            </div>
                            <div className="py-[10px] px-[10px] leading-8">
                                <a href="#" className="no-underline">
                                    <h4 className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">EAU DE PARFUM DẠNG TWIST AND SPRAY</h4>
                                </a>
                                <p className="text-[15px] text-[red]">$1.300</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div className="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div className=" w-[100%] ">
                                <a href="#"> <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/07/23/apple-tiep-tuc-thong-tri-thi-truong-may-tinh-bang.jpg" /></a>
                            </div>
                            <div className="py-[10px] px-[10px] leading-8">
                                <a href="#" className="no-underline">
                                    <h4 className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">EAU DE PARFUM DẠNG TWIST AND SPRAY</h4>
                                </a>
                                <p className="text-[15px] text-[red]">$1.300</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div className="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div className=" w-[100%] ">
                                <a href="#"> <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/07/23/apple-tiep-tuc-thong-tri-thi-truong-may-tinh-bang.jpg" /></a>
                            </div>
                            <div className="py-[10px] px-[10px] leading-8">
                                <a href="#" className="no-underline">
                                    <h4 className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">EAU DE PARFUM DẠNG TWIST AND SPRAY</h4>
                                </a>
                                <p className="text-[15px] text-[red]">$1.300</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div className="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </article>

    )
}

export default ProductsDetail