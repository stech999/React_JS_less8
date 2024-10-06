import React, { useState } from "react";
import { TopMenu } from "./site/topMenu";
import { Link } from "react-router-dom";
import { Footer } from "./site/Footer";
import { Delivery } from "./site/delivery";
import products from "./localDB";
import ProductItem from "./site/content";
import "../style/style.css";


function pagination(array, pageSize, pageNumber) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function Catalog() {

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSizeChange = (size) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter((s) => s !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
        }
    };

    const displayedProducts = pagination(
        products.filter(
            (product) => selectedSizes.length === 0 || selectedSizes.includes(product.size)
        ),
        pageSize,
        currentPage
    );

    const totalPages = Math.ceil(
        products.filter(
            (product) =>
                selectedSizes.length === 0 || selectedSizes.includes(product.size)
        ).length / pageSize
    );

    return (
        <div className="box-content">
            <TopMenu />
            <content className="content">
                <div className="head center">
                    <h1 className="head_title">NEW ARRIVALS</h1>
                    <nav className="breadcrums">
                        <Link to="/" className="breadcrums__link">
                            HOME
                        </Link>
                        <Link to="/" className="breadcrums__link">
                            MEN
                        </Link>
                        <Link to="/"
                            className="breadcrums__link breadcrums__link__highlight"
                        >
                            NEW ARRIVALS
                        </Link>
                    </nav>
                </div>
                <div className="filter-sorter center">
                    <div className="filter-block">
                        <details className="filter">
                            <summary className="filter__summary">
                                <span className="filter__title">FILTER</span>
                                <img src="/img/filter.svg" alt="filter" />
                            </summary>
                            <div className="filter__content">
                                <details open className="filter__item">
                                    <summary className="filter__subtitle">CATEGORY</summary>
                                    <div className="filter__link-box">
                                        <Link to="/" className="filter__link">Tops</Link>
                                        <Link to="/" className="filter__link">Sweaters/Knits</Link>
                                        <Link to="/" className="filter__link">Jackets/Coats</Link>
                                        <Link to="/" className="filter__link">Blazers</Link>
                                        <Link to="/" className="filter__link">Denim</Link>
                                        <Link to="/" className="filter__link">Leggings/Pants</Link>
                                        <Link to="/" className="filter__link">Skirts/Shorts</Link>
                                        <Link to="/" className="filter__link">Accessories</Link>
                                        <Link to="/" className="filter__link">Bags/Purses</Link>
                                        <Link to="/" className="filter__link">Swimwear/Underwear</Link>
                                        <Link to="/" className="filter__link">Nightwear</Link>
                                        <Link to="/" className="filter__link">Shoes</Link>
                                        <Link to="/" className="filter__link">Beauty</Link>
                                    </div>
                                </details>
                                <details className="filter__item">
                                    <summary className="filter__subtitle">BRAND</summary>
                                    <div className="filter__link-box">
                                        <Link to="/" className="filter__link">Denim</Link>
                                        <Link to="/" className="filter__link">Leggings/Pants</Link>
                                        <Link to="/" className="filter__link">Skirts/Shorts</Link>
                                        <Link to="/" className="filter__link">Accessories</Link>
                                        <Link to="/" className="filter__link">Bags/Purses</Link>
                                        <Link to="/" className="filter__link">Swimwear/Underwear</Link>
                                        <Link to="/" className="filter__link">Nightwear</Link>
                                        <Link to="/" className="filter__link">Shoes</Link>
                                        <Link to="/" className="filter__link">Beauty</Link>
                                    </div>
                                </details>
                                <details className="filter__item">
                                    <summary className="filter__subtitle">DESIGNER</summary>
                                    <div className="filter__link-box">
                                        <Link to="/" className="filter__link">Bags/Purses</Link>
                                        <Link to="/" className="filter__link">Swimwear/Underwear</Link>
                                        <Link to="/" className="filter__link">Nightwear</Link>
                                        <Link to="/" className="filter__link">Shoes</Link>
                                        <Link to="/" className="filter__link">Beauty</Link>
                                    </div>
                                </details>
                            </div>
                        </details>
                    </div>
                    <div className="sorter">
                        <details className="sorter__details">
                            <summary className="sorter__summary">
                                <span className="sorter__title">TRENDING NOW</span>
                                <img src="/img/vectorDown.svg" alt="vectorDown" />
                            </summary>
                        </details>
                        <details className="sorter__details">
                            <summary className="sorter__summary">
                                <span className="sorter__title">SIZE</span>
                                <img src="/img/vectorDown.svg" alt="vectorDown" />
                            </summary>
                            <div className="sorter__content">
                                <div className="sorter__item">
                                    <input
                                        type="checkbox"
                                        className="sorter__checkbox"
                                        id="sorter__size-XS"
                                        defaultChecked="true"
                                        onChange={() => handleSizeChange("XS")}
                                        checked={selectedSizes.includes("XS")}
                                    />
                                    <label className="sorter__label" htmlFor="sorter__size-XS">
                                        XS
                                    </label>
                                </div>
                                <div className="sorter__item">
                                    <input
                                        type="checkbox"
                                        className="sorter__checkbox"
                                        id="sorter__size-S"
                                        defaultChecked="true"
                                        onChange={() => handleSizeChange("S")}
                                        checked={selectedSizes.includes("S")}
                                    />
                                    <label className="sorter__label" htmlFor="sorter__size-S">
                                        S
                                    </label>
                                </div>
                                <div className="sorter__item">
                                    <input
                                        type="checkbox"
                                        className="sorter__checkbox"
                                        id="sorter__size-M"
                                        defaultChecked="true"
                                        onChange={() => handleSizeChange("M")}
                                        checked={selectedSizes.includes("M")}
                                    />
                                    <label className="sorter__label" htmlFor="sorter__size-M">
                                        M
                                    </label>
                                </div>
                                <div className="sorter__item">
                                    <input
                                        type="checkbox"
                                        className="sorter__checkbox"
                                        id="sorter__size-L"
                                        defaultChecked="true"
                                        onChange={() => handleSizeChange("L")}
                                        checked={selectedSizes.includes("L")}
                                    />
                                    <label className="sorter__label" htmlFor="sorter__size-L">
                                        L
                                    </label>
                                </div>
                            </div>
                        </details>
                        <details className="sorter__details">
                            <summary className="sorter__summary">
                                <span className="sorter__title">PRICE</span>
                                <img src="/img/vectorDown.svg" alt="vectorDown" />
                            </summary>
                        </details>
                    </div>
                </div>
                <div className="products spec_catalog center">
                    <div className="product_items product_items_spec">
                        {displayedProducts.map((product) => (
                            <ProductItem
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                img={product.img}
                            />
                        ))}
                    </div>

                    <div className="catalog_nav">
                        <nav className="catalog_nav__box">
                            <div className="catalog_nav__pagination">
                                {Array.from(
                                    { length: totalPages },
                                    (_, index) => (
                                        <p
                                            key={index}
                                            onClick={() => handlePageChange(index + 1)}
                                            className="catalog_nav__link"
                                        >
                                            {index + 1}
                                        </p>
                                    )
                                )}
                            </div>
                        </nav>
                    </div>
                </div>
            </content>
            <Delivery />
            <Footer />
        </div>
    );
}

export default Catalog;