import React, { Component } from 'react'
import axios  from 'axios'
import ReactLoading from 'react-loading';
import Layout from "../components/layout/Layout";
import FormProduct from '../components/product/form'
import ProductList from '../components/product/list'

export default class Product extends Component {
constructor(props) {
    super(props)

}


    render() {
        return (
            <div>
                 <Layout contentTitle="About">

               <FormProduct />
                <ProductList />
                 </Layout>
            </div>
        )
    }
}
