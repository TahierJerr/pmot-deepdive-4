import CategoryList from '@/components/category-list'
import Header from '@/components/header'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <Header />
    <CategoryList title='Categories' subtitle='Explore our categories' />
    </>
  )
}

export default HomePage
