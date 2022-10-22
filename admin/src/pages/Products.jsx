import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddProducts from '../components/AddProducts';
import AllProducts from '../components/AllProducts';

const Products = () => {
  return (
    <div className='p-container'>
      <Tabs>
        <TabList>
          <Tab>All Products</Tab>
          <Tab>Add Product</Tab>
        </TabList>

        <TabPanel>
          <AllProducts />
        </TabPanel>
        <TabPanel>
          <AddProducts />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Products