import { DessertInterface } from '../data/data'
import cartIcon from '../assets/images/icon-add-to-cart.svg'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, changeQuantity, removeFromCart } from '../store/cart'
import { RootState } from '../store/store'

interface DessertCardProps {
  // key: number
  dessert: DessertInterface
}

const DessertCard: React.FC<DessertCardProps> = ({ dessert }) => {
  const cart = useSelector((state: RootState) => state.cart.items)
  const [isHoveredIncrement, setIsHoveredIncrement] = useState(false)
  const [isHoveredDecrement, setIsHoveredDecrement] = useState(false)
  const [quantity, setQuantity] = useState(0)

  const dispatch = useDispatch()
  const handleAddToCart = () => {
    setQuantity(quantity + 1)
    dispatch(
      addToCart({
        id: dessert.id,
        name: dessert.name,
        category: dessert.category,
        price: dessert.price,
        quantity: quantity + 1,
        image: dessert.image.thumbnail,
      })
    )
  }

  const handleMinusQuantity = () => {
    if (quantity <= 0) {
      dispatch(removeFromCart(dessert.id))
    } else {
      setQuantity(quantity - 1)
      dispatch(
        changeQuantity({
          id: dessert.id,
          quantity: quantity - 1,
        })
      )
    }
  }

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1)
    dispatch(
      changeQuantity({
        id: dessert.id,
        quantity: quantity + 1,
      })
    )
  }

  useEffect(() => {
    if (!cart.some((item) => item.id === dessert.id)) {
      setQuantity(0)
    }
  }, [cart, dessert.id])

  return (
    <div>
      <div className="top-container relative">
        <div className="img-container static">
          <picture className="dessert-img ">
            <source
              media="(min-width: 1024px)"
              srcSet={dessert.image.desktop}
            />
            <source media="(min-width: 768px)" srcSet={dessert.image.tablet} />
            <img
              src={dessert.image.mobile}
              alt={dessert.name}
              className={`rounded-xl w-full h-full object-cover border-2 ${
                quantity <= 0 ? 'border-transparent' : 'border-red'
              }`}
            />
          </picture>
        </div>
        <div className="btn-container flex justify-center items-center absolute left-1/2 -translate-x-1/2 -bottom-5">
          {quantity <= 0 ? (
            <button
              className="add-to-cart w-44 lg:w-48 flex justify-center border border-zinc-500 hover:border-red bg-white hover:text-red py-2.5 px-6 rounded-full transition delay-300 duration-300 ease-in-out hover:scale-110"
              onClick={handleAddToCart}
            >
              <div className="flex items-center gap-2 font-semibold">
                <img src={cartIcon} alt="add to cart" />
                <p>Add to Cart</p>
              </div>
            </button>
          ) : (
            <div className="add-btn-and-quantity w-44 lg:w-48 flex items-center justify-between bg-red py-2.5 px-2.5 rounded-full">
              <button
                className="decrement-btn border border-white w-6 h-6 rounded-full flex items-center justify-center hover:bg-white"
                onMouseOver={() => setIsHoveredDecrement(true)}
                onMouseOut={() => setIsHoveredDecrement(false)}
                onClick={handleMinusQuantity}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="currentColor"
                  viewBox="0 0 10 2"
                >
                  <path
                    fill="#fff"
                    d="M0 .375h10v1.25H0V.375Z"
                    className={` focus:fill-red ${
                      isHoveredDecrement
                        ? 'fill-red hover:fill-white'
                        : 'fill-white hover:fill-red'
                    }`}
                  />
                </svg>
              </button>
              <span className="text-white font-semibold">{quantity}</span>
              <button
                className="increment-btn border border-white w-6 h-6 rounded-full flex items-center justify-center hover:bg-white"
                onMouseOver={() => setIsHoveredIncrement(true)}
                onMouseOut={() => setIsHoveredIncrement(false)}
                onClick={handlePlusQuantity}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill="#fff"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                    className={`focus:fill-red ${
                      isHoveredIncrement
                        ? 'fill-red hover:fill-white'
                        : 'fill-white hover:fill-red'
                    }`}
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="bottom-container mt-8 lg:mt-10">
        <h3 className="text-zinc-500">{dessert.category}</h3>
        <h1 className="text-xl font-semibold">{dessert.name}</h1>
        <h2 className="text-red text-lg font-semibold">
          ${dessert.price.toFixed(2)}
        </h2>
      </div>
    </div>
  )
}
export default DessertCard

// id: number
//   image: {
//     thumbnail: string
//     mobile: string
//     tablet: string
//     desktop: string
//   }
//   name: string
//   category: string
//   price: number
