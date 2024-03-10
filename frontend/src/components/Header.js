import React ,{useState} from 'react'
import {AppBar,Toolbar,Tabs,Tab, Typography} from '@mui/material'
import AddHomeIcon from '@mui/icons-material/AddHome';
import {NavLink} from 'react-router-dom';
// import logo from '../images/logo.jpg'
const Header = () => {
  const [value,setValue] = useState()
  return (
    <div>
      <AppBar sx={{backgroundColor: '#232F3D'}}position='sticky'>
        <Toolbar>
          {/* <img src={logo} width={90}/> */}
          <Typography variant='h5'>Online Blogging Platform</Typography>
          <Tabs sx={{ml: 'auto'}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setValue(val)}>
          <Tab LinkComponent={NavLink} to='/SignUp' label='SignUp'/>
          <Tab LinkComponent={NavLink} to='/SignIn' label='SignIn'/>
          <Tab LinkComponent={NavLink} to='/Blog' label='Create Blog'/>
          {/* <Tab LinkComponent={NavLink} to='/Councillor' label='Add Councillor'/> */}
          <Tab LinkComponent={NavLink} to='/FetchRegistration' label='FetchData'/>
          {/* <Tab LinkComponent={NavLink} to='/Visitor' label='Add Visitor'/> */}
          <Tab LinkComponent={NavLink} to='/Contact' label='Contact Us'/>
          <Tab LinkComponent={NavLink} to='/Logout' label='Logout'/>


        </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
