import { createBrowserRouter } from 'react-router-dom'
import { App } from '../ui/App'
import {
    Home,
    OrdersDone,
    UserOrder,
    CollaboratorLogin,
    CollaboratorCreateUser,
    CollaboratorTask,
    CollaboratorCreateProduct,
} from '../ui/pages'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/ordenLista',
        element: <OrdersDone />,
    },
    {
        path: '/userDone',
        element: <UserOrder />,
    },
    {
        path: '/collaborator/login',
        element: <CollaboratorLogin />,
    },
    {
        path: '/collaborator/create-user',
        element: <CollaboratorCreateUser />,
    },
    {
        path: '/collaborator',
        element: <App />,
        children: [
            {
                index: true,
                element: <CollaboratorTask />,
            },
            {
                path: 'tasks',
                element: <CollaboratorTask />,
            },
            {
                path: 'create-product',
                element: <CollaboratorCreateProduct />,
            },
        ],
    },
])
