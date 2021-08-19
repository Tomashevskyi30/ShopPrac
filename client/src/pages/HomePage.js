import './HomePage.css'
import Product from "../components/Product";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts as listProducts} from "../redux/actions/productActions";

function HomePage() {

    const dispatch = useDispatch();

    const getProducts = useSelector(state=>state.getProducts);
    const {products,loading,error} = getProducts;

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

    return (
        <div className="homepage">
            <h2 className="homepage__title">Latest Products</h2>
            <div className="homepage__products">
                {loading
                    ? <h2>Loading...</h2>
                    : error
                        ? <h2>{error}</h2>
                        :
                        products.map(product=>(
                    <Product
                        key ={product._id}
                        productId={product._id}
                        name = {product.name}
                        price ={product.price}
                        desc = {product.description}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;