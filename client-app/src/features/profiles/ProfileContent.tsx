import React from 'react'
import {Tab} from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import ProfilePhotos from './ProfilePhotos'
import ProfileFollowings from './ProfileFollowings'

const panes = [
    {menuItem: 'About', render: () => <Tab.Pane>About content</Tab.Pane>},
    {menuItem: 'Photos', render: () => <ProfilePhotos />},
    {menuItem: 'Activities', render: () => <Tab.Pane>Activities content</Tab.Pane>},
    {menuItem: 'Followers', render: () => <ProfileFollowings />},
    {menuItem: 'Following', render: () => <ProfileFollowings />},
]

interface IProps {
    setActiveTab: (activeIndex: any) => void;
}


const ProfileContent: React.FC<IProps> = ({setActiveTab}) => {
    return (
        <Tab
            menu={{fluid: true, vertical:true}}
            menuPosition='right'
            panes={panes}
            onTabChange={(e, data) => setActiveTab(data.activeIndex)}
        />
    )
}

export default observer(ProfileContent);
