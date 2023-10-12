import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import ErrorPage from "../pages/Error";
const Products = () => {
	const dispatch = useDispatch();

	const { data: products, status } = useSelector((state) => state.product);

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	const handleAdd = (product) => {
		dispatch(add(product));
	};

	if (status === STATUSES.LOADING) {
		return <h2>Loading ....</h2>;
	}
	if (status === STATUSES.ERROR) {
		return <ErrorPage />;
	}

	return (
		<section className='align-element pt-10'>
			<div className='border-b border-base-300 pb-5'>
				<h2 className='text-3xl font-medium tracking-wider capitalize'>
					Our Products
				</h2>
			</div>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10'>
				{products?.map((product) => (
					<div
						className='card w-full bg-gray-900 shadow-lg hover:shadow-md hover:scale-105 hover:shadow-stone-700 transition duration-300'
						key={product._id}>
						<figure className='px-4 py-4 w-full h-64 hover:rounded-sm md:h-48 md:w-full bg-slate-800'>
							<p>Image</p>
						</figure>
						<div className='card-body flex row-span-3 text-center '>
							<h4 className='card-title capitalize trakcing-wider'>
								{" "}
								{product.name}
							</h4>
							<h5 className=' text text-yellow-400 text-center'>
								{product.price}
							</h5>
							<button
								className='btn btn-outline'
								onClick={() => {
									handleAdd(product);
								}}>
								Add to cart
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Products;
