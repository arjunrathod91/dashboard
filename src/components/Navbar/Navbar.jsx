import React from 'react'

import '../Navbar/Navbar.css'
import GridViewIcon from '@mui/icons-material/GridView';
import CategoryIcon from '@mui/icons-material/Category';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DiscountIcon from '@mui/icons-material/Discount';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="header">
            <GridViewIcon/>
            <h2>Dashboard</h2>
        </div>
        <div className="menu">
            <ul>
                <li className='item'>
                    <div className='any'>
                    <GridViewIcon/>
                    <strong>Dashboard</strong>
                    </div>
                    <KeyboardArrowRightIcon/>
                </li>
                <li className='item'>
                <div className='any'>
                    <CategoryIcon/>
                    <strong>Product</strong>
                    </div>
                    <KeyboardArrowRightIcon/>
                </li>
                <li className='item'>
                <div className='any'>
                    <AccountBoxIcon/>
                    <strong>Customers</strong>
                    </div>
                    <KeyboardArrowRightIcon/>
                </li>
                <li className='item'>
                <div className='any'>
                    <AccountBalanceWalletIcon/>
                    <strong>Income</strong>
                    </div>
                    <KeyboardArrowRightIcon/>
                </li>
                <li className='item'>
                <div className='any'>
                    <DiscountIcon/>
                    <strong>Promote</strong>
                    </div>
                    <KeyboardArrowRightIcon/>
                </li>
                <li className='item'>
                <div className='any'>
                    <HelpOutlineIcon/>
                    <strong>Help</strong>
                    </div>
                    <KeyboardArrowRightIcon/>
                </li>
            </ul>
        </div>
        <div className="profile">
                <img src="https://th.bing.com/th/id/OIP.KeIijA181Ged9wRqNlkO_QHaHN?w=206&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="profile img" />
                <div className="account">
                    <strong>Evano</strong>
                    <p>Project Manager</p>
                </div>
                <ExpandMoreIcon/>
                
            </div>
      
    </div>
  )
}

export default Navbar
