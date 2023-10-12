import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
	const products = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const handleRemove = (productId) => {
		dispatch(remove(productId));
	};

	console.log(products, "products");

	return (
		<>
			<section className='align-element pt-10'>
				<div className='border-b border-base-300 pb-5'>
					<h2 className='text-3xl font-medium tracking-wider capitalize'>
						Your Cart
					</h2>
				</div>
				<div className='mt-8 grid gap-8  '>
					{products?.map((product) => {
						return (
							<div
								className=' cartCard  flex flex-col bg-slate-700 gap-y-4 sm:flex-row justify-between border-b border-base-300 pb-6 last:border-b-0  shadow-lg hover:shadow-md hover:scale-105 hover:shadow-stone-700 transition duration-300'
								key={product._id}>
								<figure className='	px-4 py-4 w-full h-full hover:rounded-sm md:h-24 md:w-24 bg-slate-800'>
									<p>Image</p>
								</figure>
								<h5 className='font-semibold capitalize text-stone-300'>
									{product.name}
								</h5>
								<h5 className='text-lg text-yellow-300'>{product.price}</h5>
								<button
									className='btn btn-ghost'
									onClick={() => handleRemove(product._id)}>
									Remove
								</button>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Cart;
