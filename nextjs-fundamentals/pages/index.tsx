import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

export const getServerSideProps: GetServerSideProps  = async () => {
  const response  = await fetch('http://localhost:3000/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()
  return {
    props: {
      productList
    }
  }
}

const HomePage = ({ productList }: { productList: TProduct[] })  => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
