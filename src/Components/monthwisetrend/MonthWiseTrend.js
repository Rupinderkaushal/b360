import React, { useState } from 'react';
import './MonthWiseTrend.css';
import { useDispatch ,useSelector} from 'react-redux';
import { addFilter } from '../../store/slices/userSlice';
import Sidebar from '../sidebar/Sidebar';
import {IoMdCloseCircle} from 'react-icons/io';
import {GiHamburgerMenu}from 'react-icons/gi';
const MonthWiseTrend = () => {
  const listData= useSelector(state=>state)
  const dispatch= useDispatch();
  const [mobHam,setMobHam]=useState(false);

  const clickHandler=()=>{
    setMobHam(!mobHam);
    // alert(mobHam);
  };

  return (
    <div className='month_wise_trend_wrapper'>
      <div className='mobile_ham_link' onClick={clickHandler}>
        {!mobHam ? <GiHamburgerMenu size={26} /> : <IoMdCloseCircle size={26} />}
      </div>
      <div className='sidebar_links_content'>
        <Sidebar/>
      </div>
      {mobHam &&
        <div className='mobile_sidebar'>
          <Sidebar/>
        </div>}
        <div className='bar_div'>
          <div className='bar_div_wrapper'>
            
          </div>
        </div>
    </div>
  )
}

export default MonthWiseTrend