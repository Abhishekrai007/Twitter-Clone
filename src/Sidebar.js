import React from 'react'
import { Twitter } from '@mui/icons-material'
import SidebarOption from './SidebarOption'
import { Home } from '@mui/icons-material'
import "./Sidebar.css"
import { Search } from '@mui/icons-material'
import { NotificationsNone } from '@mui/icons-material'
import { MailOutline } from '@mui/icons-material'
import { Bookmark } from '@mui/icons-material'
import { ListAlt } from '@mui/icons-material'
import { PermIdentity } from '@mui/icons-material'
import { MoreHoriz } from '@mui/icons-material'
import { Button } from '@mui/material'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <Twitter className="sidebar__twitterIcon" />
            <SidebarOption active Icon={Home} text="Home" />
            <SidebarOption Icon={Search} text='Explore' />
            <SidebarOption Icon={NotificationsNone} text='Notification' />
            <SidebarOption Icon={MailOutline} text='Messages' />
            <SidebarOption Icon={Bookmark} text='Bookmarks' />
            <SidebarOption Icon={ListAlt} text='Lists' />
            <SidebarOption Icon={PermIdentity} text='Profile' />
            <SidebarOption Icon={MoreHoriz} text='More' />
            <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar