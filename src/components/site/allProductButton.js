import React from "react";
import '../../style/style.css';
import { Link } from "react-router-dom";

export const AllProductButton = () => {
    return (
        <>
            <div class="all__product">
                <Link to='/product'>
                  
                    <div class="button">
                        <span className="all__product__but__text">Browse All Product</span>
                        <img src="/img/1187.png" alt="" />
                    </div>
                </Link>
           
        </div >
        </>
    )
}