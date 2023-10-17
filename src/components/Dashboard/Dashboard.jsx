import React from 'react'
import '../Dashboard/Dashboard.css'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import pychart from './pychart.jpg'

function Dashboard() {

    const data = [

        {
            month:"Jan",
            growth:140,
        },
        {
            month:"Feb",
            growth:130,
        },
        {
            month:"Mar",
            growth:180,
        },
        {
            month:"Apr",
            growth:150,
            // color:'blue',
        },
        {
            month:"May",
            growth:170,
        },
        {
            
            month:"Jun",
            growth:90,
        },
        {
            month:"Jul",
            growth:170,
        },
        {
            month:"Aug",
            growth:200,
            color:"rgb(113, 17, 202)",
        },
        {
            month:"Sup",
            growth:180,
        },
        {
            month:"Oct",
            growth:150,
        },
        {
            month:"Nov",
            growth:140,
        },
        {
            month:"Dec",
            growth:160,
        },
    ]

    const product = [
        {
            img:'https://free4kwallpapers.com/uploads/originals/2019/05/08/beautiful-landscape-wallpaper.jpg',
            title:'Abstract 3D',
            desc:'Lorem',
            stock:32,
            price:128,
            totalSale:20,
        }
    ]
  return (
    <div className='Dashboard'>
        <div className="container1">
            <h3>Hello Shahrukh,👋  </h3>
            <div className="search">
                <SearchIcon/>
                <input type="text" placeholder='Search' />
            </div>

        </div>
        <div className="container2">
            <ul className='list'>
                <li className='box'>
                    <div className="left" style={{backgroundColor:"rgb(176, 248, 190)"}} >
                        <MonetizationOnIcon fontSize="large"/>
                    </div>
                    <div className="right">
                        <lable>Earning</lable>
                        <strong>$199k</strong>
                        <p><span className='up'><NorthIcon sx={{ fontSize: 12 }} />37.8%</span> this month</p>

                    </div>
                </li>
                <li className='box'>
                    <div className="left" style={{backgroundColor:"rgb(224, 176, 248)"}}>
                        <ListAltIcon fontSize="large"/>
                    </div>
                    <div className="right">
                    <lable>Orders</lable>
                        <strong>$199k</strong>
                        <p><span className='down'> <SouthIcon sx={{ fontSize: 12 }} />37.8%</span> this month</p>

                    </div>
                </li>
                <li className='box'>
                    <div className="left"  style={{backgroundColor:"rgb(176, 231, 248)"}}>
                        <AccountBalanceWalletIcon fontSize="large" fill="none"/>
                    </div>
                    <div className="right">
                    <lable>Balance</lable>
                        <strong>$199k</strong>
                        <p><span></span><span className='down'><SouthIcon sx={{ fontSize: 12 }} />37.8%</span> this month</p>

                    </div>
                </li>
                <li className='box'>
                    <div className="left"  style={{backgroundColor:"rgb(247, 120, 202)"}}>
                        <ShoppingBagIcon fontSize="large"/>


                    </div>
                    <div className="right">
                    <lable>Total Sales</lable>
                        <strong>$199k</strong>
                        <p><span className='up'><NorthIcon sx={{ fontSize: 12 }} />37.8%</span> this month</p>

                    </div>
                </li>
            </ul>

        </div>
        <div className="container3">
            <div className="overview">
                <div className="top">
                    <div>
                    <h4>Overview</h4>
                    <p>Monthly Earning</p>
                    </div>
                    <div className='quarterly'>
                        <input type="select" placeholder='Quarterly'/>
                        <ExpandMoreIcon fontSize='small'/>
                    </div>
                </div>
                <div className="bottom">
                    {data.map((item)=>{
                        return(
                            <div item={item}>
                                <div className="growth" style={{height:`${item.growth}px`,backgroundColor:`${item.color}`}}>
                                </div>
                                <p>{item.month}</p>
                            </div>
                        )
                        
                    })}


                </div>

            </div>
            <div className="customer">
                <div className="top">
                    <div className="t-left">
                    <h4>Customer</h4>
                    <p>Customer that buy products</p>
                    </div>

                </div>
                <div className="bottom">
                    <img src={pychart} />

                </div>

            </div>

        </div>
        <div className="container4">
            <div className="top">
                <div className="t-top">
                <h4>Product Sell</h4>
                </div>
                <div className="search">
                <SearchIcon/>
                <input type="text" placeholder='Search' />
                </div>
                <div className="search">
                    <input type="text" placeholder='Last 30 days'/>
                    <ExpandMoreIcon fontSize='small'/>
                </div>
            </div>
            <div className="middle">
                <p>Product</p>
                <div className="analitics">
                    <p>Stock</p>
                    <p>Price</p>
                    <p>Total Sales</p>
                </div>
            </div>
            {product.map((product)=>{
                return(
                    <div className="report" product={product}>
                        <div className="detail">
                        <img src={product.img} alt="" />
                        <div class="flex">
                            <h4>{product.title}</h4>
                            <p>{product.desc}</p>
                            </div>
                        </div>
                        <div className="data-ana">
                            <p className='p1'>{product.stock}</p>
                        <p className='p2'>{product.price}</p>
                        <p>{product.totalSale}</p>
                        </div>
                    </div>
                )

            })

            }


        </div>
        
      
    </div>
  )
}

export default Dashboard
