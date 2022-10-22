import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddBlogs from '../components/AddBlogs';
import AllBlogs from '../components/AllBlogs';

const Posts = () => {
  return (
    <div className='p-container'>
      <Tabs>
        <TabList>
          <Tab>All Blogs</Tab>
          <Tab>Add Blog</Tab>
        </TabList>

        <TabPanel>
          <AllBlogs />
        </TabPanel>
        <TabPanel>
          <AddBlogs />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Posts