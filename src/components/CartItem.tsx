import { useState } from 'react'
import { removeFromCart, type CartItem } from '../store/cart'
import { useDispatch } from 'react-redux'

type CartItemProps = {
  cart: CartItem
}

const CartItem: React.FC<CartItemProps> = ({ cart }) => {
  const [isHover, setIsHover] = useState(false)
  const dispatch = useDispatch()

  const handleRemoveItem = () => {
    dispatch(removeFromCart(cart.id))
  }

  return (
    <div>
      <div className="flex items-center justify-between my-5">
        <div className="main-container">
          <h1 className="text-sm font-semibold mb-2">{cart.name}</h1>
          <div className="price-and-total flex items-center gap-4 text-zinc-500 text-sm">
            <p className="text-red font-semibold">{cart.quantity}x</p>
            <p>@ ${cart.price.toFixed(2)}</p>
            <p className="font-semibold">
              ${(cart.quantity * cart.price).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="remove-btn">
          <button
            className="btn-container w-5 h-5 flex justify-center items-center border-2 border-gray-400 hover:border-zinc-600  rounded-full"
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            onClick={handleRemoveItem}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="#d4d4d8"
              viewBox="0 0 10 10"
            >
              <path
                fill="#d4d4d8"
                d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                className={` ${isHover ? 'fill-[#52525b]' : 'fill-[#9ca3af]'}`}
              />
            </svg>
          </button>
        </div>
      </div>
      <hr />
    </div>
  )
}
export default CartItem
