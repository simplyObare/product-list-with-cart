import emptyCart from '../assets/images/illustration-empty-cart.svg'
import CartItem from './CartItem'
import carbonNeutral from '../assets/images/icon-carbon-neutral.svg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store'
import { toggleOrderConfirmed } from '../store/cart'

const Cart = () => {
  const carts = useSelector((store: RootState) => store.cart.items)
  console.log(carts)

  const dispatch = useDispatch()

  return (
    <div className="w-auto md:w-[38vw] lg:w-[38vw] h-fit max-h-auto bg-white px-4 py-8 sm:px-6 md:px-6 lg:px-8 rounded-xl">
      <h1 className="text-2xl font-bold text-red">
        Your Cart ({carts.reduce((acc, cur) => acc + cur.quantity, 0)})
      </h1>
      <div className="main-cart-container mt-4 flex flex-col items-center justify-center">
        {carts.length === 0 ? (
          <div className="illustration-empty-cart flex flex-col items-center justify-center gap-3 mt-4">
            <img src={emptyCart} alt=" empty cart " />
            <p className="text-xs text-rose-800 font-semibold">
              Your added items will appear here
            </p>
          </div>
        ) : (
          <div className="cart-item-section w-full mt-5">
            {carts.map((cart, key) => (
              <CartItem key={key} cart={cart} />
            ))}
            <div className="btn-and-order mt-6">
              <div className="order-total flex item-center justify-between mb-6">
                <p className="text-sm text-slate-700">Order total</p>
                <p className="text-2xl font-bold">
                  $
                  {carts
                    .reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
                    .toFixed(2)}
                </p>
              </div>

              <div className="carbon-neutral flex items-center justify-center gap-2 bg-rose-50 rounded-lg py-4">
                <img src={carbonNeutral} alt="" />
                <p className="text-xs">
                  This is a{' '}
                  <span className="font-semibold">carbon-neutral</span> delivery
                </p>
              </div>

              <button
                className="w-full bg-red hover:bg-rose-900 hover:scale-105 text-white font-semibold px-2 py-4 rounded-full mt-6"
                onClick={() => dispatch(toggleOrderConfirmed())}
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Cart
