import { Home } from 'react-feather';

export const MENUITEMS = [
    {
        menutitle: 'Sample Page',
        Items: [
            {
                title: 'Sample Page', icon: Home, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Sample Page 1', type: 'link' },
                ]
            },
        ]
    },
    {
        menutitle: 'Raise ticket',
        Items: [
            {
                title: 'Raise ticket', icon: Home, type: 'sub', active: false, children: [
                    { path: `http://support.pixelstrap.com/help-center`, title: 'Raise ticket', type: 'exteral_link' },
                ]
            },
        ]
    },
];