import React from "react";
import products from "../localDB";
import ProductItem from "./content";

export const GetItems = () => {
    return (
        <div className="content_box">
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    img={product.img}
                />
            ))}
        </div>
    )
}