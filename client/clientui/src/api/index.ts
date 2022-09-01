const BANNER_LINK = `https://api.vuahanghieu.com/banner?filters=type=product-top-banner,status=active&service_token=tuPdWKrMRY`;
const CATOLOGE_LINK = `https://api.vuahanghieu.com/category?filters=type=category,parent_id=0&service_token=tuPdWKrMRY&page_size=-1&fields=id,title,slug,image_url,depth,type,description,meta_title,meta_description,meta_keywords,rating_count,rating_value`;
const POPULAR_LINK = `https://api.vuahanghieu.com/service/manufacture/popular?pageSize=15`;
const PRODUCT_BY_CATOLOGE = `https://api.vuahanghieu.com/service/product-by-category?pageSize=6&service_token=tuPdWKrMRY`;
import axios from "axios";
import { FC } from "react";
import { FilterCondition } from "../models"
const FetchFilter = async function ({ slug,}: FilterCondition) {
    try {
        // const FILTER = `https://api.vuahanghieu.com/service/category/giay/products?&brand=Adidas&page=1`
        let data = await axios.get(`https://api.vuahanghieu.com/service/category/${slug ? slug : "giay"}/products`);
        return data.data;
    } catch (e) {
        console.log(e, "Fetch Filter");
    }
}

const FetchBanner = async function () {
    try {
        let data = await axios.get(BANNER_LINK)
        return data.data;
    } catch (e) {
        console.log(e, "Fetch Banner");
    }
}

const FetchCatologe = async function () {
    try {
        let data = await axios.get(CATOLOGE_LINK);
        return data.data;
    } catch (e) {
        console.log(e, "Fetch Catologe");
    }
}


const FetchProductByCatologe = async function () {
    try {
        let data = await axios.get(PRODUCT_BY_CATOLOGE)
        return data.data
    } catch (e) {
        console.log(e, "Fetch Prodcut By Catologe");
    }
}

const FetchPopularProduct = async function () {
    try {
        let data = await axios.get(POPULAR_LINK)
        return data.data;
    }
    catch (e) {
        console.log(e, "Fetch Popular ");
    }
}



export { FetchFilter, FetchBanner, FetchCatologe, FetchPopularProduct, FetchProductByCatologe };