import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [producList, setProductList] = useState([]);

  useEffect(() => {
    window.fetch('/api/avo')
      .then(response => response.json())
      .then(({data, lenght}) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <h1>Good day</h1>
      {producList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}

export default HomePage
