import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AboutMe from './AboutMe';
import ChangePassword from './ChangePassword';
import MyOrders from './MyOrders';

const MyAccount = () => {
  return (
    <div className='my-container'>
        <div className="my-row">
            <h2 className="s-title">My Account</h2>
        </div>
        <div className="my-row">
            <Tabs>
                <TabList>
                    <Tab>About Me</Tab>
                    <Tab>Orders</Tab>
                    <Tab>Settings</Tab>
                </TabList>

                <TabPanel>
                    <AboutMe />
                </TabPanel>
                <TabPanel>
                    <MyOrders />
                </TabPanel>
                <TabPanel>
                    <ChangePassword />
                </TabPanel>
            </Tabs>
        </div>
    </div>
  )
}

export default MyAccount