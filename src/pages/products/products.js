import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'

import Styles from  '../../styles/product.module.css'


export default function products({ products }) {
 
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div>
        <h3 className={Styles.heading}>All Products</h3>
      </div>
      <div className={Styles.product}>
        {products.map((product) => (
          <div key={product.id}>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <Image 
              src={product.images[1]}
              alt="product-image"
              width={250}
              height={200}
              loading="lazy"
             decoding="async"
            />
          </div>
        ))}
      
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  try {
    const response = await axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
    const products = response.data
    return {
      props: { products }
    }
  } catch (error) {
    console.log(error)
    return {
      props: { data: null }
    }
  }
}