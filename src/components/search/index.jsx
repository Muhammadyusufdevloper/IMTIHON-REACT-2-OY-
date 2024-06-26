import { useEffect, useState } from "react";
import "./Search.scss";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../context/api/product-api";
import { FaArrowAltCircleLeft, FaSearch } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Search = ({ searchMenu, setSearchMenu }) => {
    const [search, setSearch] = useState("".trim());
    const { data } = useGetProductsQuery({ title: search.trim() });
    useEffect(() => {
        if (searchMenu === false) {
            setSearch("")
        }
    }, [searchMenu])
    const filteredData = data?.products?.filter((el) =>
        el.title.trim().toLowerCase().includes(search.trim().toLowerCase())
    );
    const handelHome = () => {
        setSearchMenu(false)
    }
    return (
        <>
            <div className={`search ${searchMenu ? "search__show" : ""}`}>
                <button onClick={handelHome} className="search__home">
                    <FaArrowAltCircleLeft />
                    <p>Home</p>
                </button>
                <form className="search__form">
                    <button type="button">
                        <FaSearch />
                    </button>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        name="search"
                        placeholder="Find a product"
                    />
                </form>
                {search.trim() && filteredData.length > 0 ? (
                    <div className="search__dropdown">
                        {filteredData.map((el) => (
                            <Link key={el.id} to={`/single-product/${el.id}`} className="search__link">
                                <IoSearchOutline />
                                <h3 className="search__title">{el.title}</h3>
                            </Link>
                        ))}
                    </div>
                ) : <></>
                }
            </div>
        </>
    );
};

export default Search;
