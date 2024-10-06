import React, { useContext } from "react";
import "../../style/style.css";
import { AddItems } from "../add_items_cart/add_items_carts";
import { Link } from "react-router-dom";


function ProductItem({ id, title, price, img }) {
    
    const { addToCart } = useContext(AddItems);

    const handleAddToCart = () => {
        addToCart(id);
    };

    return (
        <>
            <div className="content">
                <div className="content__top">
                    <div className="item-box">
                        <div className="item">
                            <Link to="/cartPage" className="item-link" >
                                <img className="item-pic" src={img} alt="товар" />
                                    <div className="txt-box">
                                    <p className="item-dsc">{title}</p>
                                    <p className="item-price">${price}</p>
                                    </div>
                            </Link>
                            <div className="add-box">
                                <Link id="item1" className="add" onClick={handleAddToCart}>
                                    <img className="add-pic" src="/img/cart-add.svg" alt="cart" />
                                        <p className="add-txt">Add to Cart</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductItem;