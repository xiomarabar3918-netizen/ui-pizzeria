import { createBrowserRouter } from 'react-router-dom'
import { App } from '../ui/App'
import {CollaboratorCreateUser, CollaboratorLogin, CollaboratorTask, OrdersDone, UserOrder} from '../ui/pages'

export const router = createBrowserRouter([
	{
		path: '/ordenLista',
		element: <OrdersDone/> 
	},
	{
		path: '/userDone',
		element: <UserOrder />,
	},
	{
		path: '/collaborator',
		element: <App />,
		children: [
			{
				index: true,
				element: <CollaboratorLogin />,
			},
			{
				path: 'login',
				element: <CollaboratorLogin />,
			},
			{
				path: 'create-user',
				element: <CollaboratorCreateUser />,
			},
			{
				path: 'tasks',
				element: <CollaboratorTask />,
			},
		],
	},
])
