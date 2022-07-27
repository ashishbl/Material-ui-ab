import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';

export const mainNavbarItems = [
    {
        id: 1,
        label: 'Authentication',
        icon: <PeopleIcon/>,
        route:'authentication'
    },
    {
        id: 2,
        label: 'User',
        icon: <PersonIcon/>,
        route:'user'
    }

]