import React, { useContext, useState, useEffect } from "react";
import '../../style/style.css';
import { Link } from "react-router-dom";
import { TopMenu } from "./topMenu";
import products from "../localDB";
import { AddItems } from "../add_items_cart/add_items_carts";
import { Subscribe } from "./subscribe";
import { AllRight } from "./allRight";


const CartPage = () => {
    const { cartItems, removeItems, updateItems, clearCart } = useContext(AddItems);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            const product = products.find((product) => product.id === item.id);
            total += product.price * item.quantity;
        });
        setTotalPrice(total);
    }, [cartItems]);

    const QuantityChange = (event, productId) => {
        const newQuantity = parseInt(event.target.value);
        updateItems(productId, newQuantity);
    };

    const RemoveItem = (productId) => {
        removeItems(productId);
    };

    const ClearCart = () => {
        clearCart();
    };

    return (
        <div className="box-content">
            <TopMenu />
            <content className="content">
                <div className="head center">
                    <h1 className="head_title">SHOPPING CART</h1>
                </div>
                <div className="cart-box center">
                    {cartItems.length === 0 ? (
                        <h2>Сейчас твоя карзина пуста!</h2>
                    ) : (
                        <div className="cart-box__left">
                            <div className="cart-box__products">
                                {cartItems.map((item) => {
                                    const product = products.find((product) => product.id === item.id);
                                    if (product)
                                        return (
                                            <div className="cart-box__product_card" key={item.id}>
                                                <div className="cart-box__card_img">
                                                    <img src={product.img} alt="ProductImage" />
                                                </div>
                                                <div className="cart-box__card_text">
                                                    <h4 className="cart-box__card_title">{product.title}</h4>
                                                    <p className="cart-box__card_content">
                                                        Price:&nbsp;
                                                        <span className="cart-box__card_price cart-box__card_value">
                                                            ${product.price}
                                                        </span>
                                                    </p>
                                                    <p className="cart-box__card_content">
                                                        Color:&nbsp;
                                                        <span className="cart-box__card_value">
                                                            {product.color}
                                                        </span>
                                                    </p>
                                                    <p className="cart-box__card_content">
                                                        Size:&nbsp;
                                                        <span className="cart-box__card_value">
                                                            {product.size}
                                                        </span>
                                                    </p>
                                                    <label htmlFor="quantity" className="cart-box__card_content">
                                                        Quantity:
                                                    </label>
                                                    <input
                                                        id="quantity"
                                                        type="number"
                                                        min="1"
                                                        value={item.quantity}
                                                        onChange={(e) => QuantityChange(e, item.id)}
                                                    />
                                                </div>
                                                <p className="cart-box__close_icon" onClick={() => RemoveItem(item.id)}>
                                                    <img src="/img/close_icon.svg" alt="" />
                                                </p>
                                            </div>
                                        );
                                })}
                            </div>
                            <div className="cart-box__buttons">
                                <div className="cart-box__shopping_button">
                                    <p className="cart-box__shopping_button_title" onClick={ClearCart}>
                                        Clear shopping cart
                                    </p>
                                </div>
                                <div className="cart-box__shopping_button">
                                    <Link className="cart-box__shopping_button_title" to="/catalog">
                                        Continue shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="cart-box__right">
                        <div className="cart-box__shipping-form">
                            <h4 className="cart-box__shipping-title">SHIPPING ADRESS</h4>
                            <input
                                className="cart-box__shipping-field"
                                type="text"
                                placeholder="Country"
                                value="Bangladesh"
                                required
                            />
                            <input
                                className="cart-box__shipping-field"
                                type="text"
                                placeholder="State"
                                required
                            />
                            <input
                                className="cart-box__shipping-field"
                                type="text"
                                placeholder="Postcode / Zip"
                                required
                            />
                            <div className="cart-box__shipping_button">
                                <Link to="/" className="cart-box__shipping_button_title">
                                    GET A QUOTE
                                </Link>
                            </div>
                        </div>
                        <div className="cart-box__checkout-box">
                            <div className="cart-box__subtotal">
                                <div>SUB TOTAL</div>
                                <div>${totalPrice}</div>
                            </div>
                            <div className="cart-box__grandtotal">
                                <div>GRAND TOTAL</div>
                                <div className="cart-box__totalprice">${totalPrice}</div>
                            </div>
                            <hr className="cart-box__checkout-line" />
                            <div className="cart-box__checkout-button">
                                <Link to="/" className="cart-box__checkout_button_title">
                                    PROCEED TO CHECKOUT
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </content>
            <Subscribe />
            <AllRight />
        </div>
    );
}

export default CartPage;