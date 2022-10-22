import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import AllUsers from '../components/AllUsers'

const Users = () => {
  return (
    <div className='p-container'>
      <Tabs>
        <TabList>
          <Tab>All Users</Tab>
        </TabList>

        <TabPanel>
          <AllUsers />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Users