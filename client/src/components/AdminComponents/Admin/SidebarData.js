import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
export const SidebarData =[
    {
        title: 'Home',
        path:'/admin',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
   
    {
        title: 'Products',
        path:'/admin/products',
        icon: <FaIcons.FaShoppingCart/>,
        cName: 'nav-text'
    },
    {
        title: 'Categories',
        path:'/admin/categories',
        icon: <FaIcons.FaClipboardList/>,
        cName: 'nav-text'
    },
    {
        title: 'Brands',
        path:'/admin/brands',
        icon: <AiIcons.AiTwotoneReconciliation/>,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path:'/admin/users',
        icon: <FaIcons.FaUsers/>,
        cName: 'nav-text'
    },
    {
        title: 'Orders',
        path:'/admin/orders',
        icon: <IoIcons.IoMdListBox/>,
        cName: 'nav-text'
    },
    {
        title: 'Address',
        path:'/admin/address',
        icon: <FaIcons.FaClipboardList/>,
        cName: 'nav-text'
    },
   
    {
        title: 'Go Back',
        path:'/',
        icon: <MdIcons.MdArrowBack/>,
        cName: 'nav-text'
    },
]