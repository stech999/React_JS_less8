import React, { useContext } from 'react';
import "../../style/style.css";
import { Link } from 'react-router-dom';
import { AddItems } from '../add_items_cart/add_items_carts';

export function TopMenu() {
    const { cartItems } = useContext(AddItems);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <div className="header">
                <Link to="/">
                    <div className="brand">
                        <img src="/img/group_2_18.png" alt="" />
                        <p className="text__brand">
                            BRAN<span className="text__d">D</span>
                        </p>
                    </div>
                </Link>
                <div className="search">
                    <p className="browse">
                        Browse
                    </p>
                    <p>
                        <input type="text" className="f__search" placeholder="Search for Item..." />
                    </p>
                    <p className="fa__search">
                        <img src="/img/59.png" alt="/" />
                    </p>
                </div>
                <div className="cart">
                    <Link to="/cartPage">
                        <img src="/img/forma_1_1113.png" alt="" />
                        {totalItems > 0 && <span className='cart_count'>{totalItems}</span>}
                    </Link>
                </div>
                <Link to="/registration">
                    <div className="account">
                        <p className="text__account">
                            My account
                        </p>
                    </div>
                </Link>
            </div>
            <div className="top__menu">
                <li className="top__menu__text">
                    <Link to="/" className="top__menu__link">HOME</Link>
                </li>
                <li className="top__menu__text">
                    <Link to="/product" className="top__menu__link">MAN</Link>
                    <div className="mega-box">
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <div className="mega-item-img">
                                <img src="/img/rectangle_23_1802.png" alt="/" />
                                <div className="mega-item-img-text">
                                    <p>Super</p>
                                    <p>sale!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="top__menu__text">
                    <Link to="/product" className="top__menu__link">WOMEN</Link>
                    <div className="mega-box">
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <div className="mega-item-img">
                                <img src="/img/rectangle_23_1802.png" alt="/" />
                                <div className="mega-item-img-text">
                                    <p>Super</p>
                                    <p>sale!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="top__menu__text ">
                    <Link to="/product" className="top__menu__link">KIDS</Link>
                    <div className="mega-box">
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <div className="mega-item-img">
                                <img src="/img/rectangle_23_1802.png" alt="/" />
                                <div className="mega-item-img-text">
                                    <p>Super</p>
                                    <p>sale!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="top__menu__text">
                    <Link to="/product" className="top__menu__link">ACCOSERIESE</Link>
                    <div className="mega-box">
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <div className="mega-item-img">
                                <img src="/img/rectangle_23_1802.png" alt="/" />
                                <div className="mega-item-img-text">
                                    <p>Super</p>
                                    <p>sale!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="top__menu__text last">
                    <Link to="/product" className="top__menu__link">FEATURED</Link>
                    <div className="mega-box">
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <div className="mega-item-img">
                                <img src="/img/rectangle_23_1802.png" alt="/" />
                                <div className="mega-item-img-text">
                                    <p>Super</p>
                                    <p>sale!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="top__menu__text last">
                    <Link to="/product" className="top__menu__link">HOT DEALS</Link>
                    <div className="mega-box">
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <Link to="/" className="mega-link">Swimwear/Underwear</Link>
                            <Link to="/" className="mega-link">Nightwear</Link>
                            <Link to="/" className="mega-link">Shoes</Link>
                            <Link to="/" className="mega-link">Beauty</Link>
                        </div>
                        <div className="mega-item">
                            <h3 className="mega-title">Women</h3>
                            <Link to="/" className="mega-link">Tops</Link>
                            <Link to="/" className="mega-link">Sweaters/Knits</Link>
                            <Link to="/" className="mega-link">Jackets/Coats</Link>
                            <Link to="/" className="mega-link">Blazers</Link>
                            <Link to="/" className="mega-link">Denim</Link>
                            <Link to="/" className="mega-link">Leggings/Pants</Link>
                            <Link to="/" className="mega-link">Skirts/Shorts</Link>
                            <Link to="/" className="mega-link">Accessories</Link>
                            <Link to="/" className="mega-link">Bags/Purses</Link>
                            <div className="mega-item-img">
                                <img src="/img/rectangle_23_1802.png" alt="/" />
                                <div className="mega-item-img-text">
                                    <p>Super</p>
                                    <p>sale!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        </>
    )
}