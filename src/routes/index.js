import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import Home from '../containers/Home'
import Blog from '../containers/Blog'
import Blogs from '../containers/Blogs'
import CreateBlog from '../containers/CreateBlog'
import FourOFour from '../containers/FourOFour'
import Login from '../containers/Login'
//import { useScrollToTop } from '../hooks/useScrollToTop'

const Routes = () => {

	return(

		<Router>								
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/Admin" exact>
					<Login />
				</Route>
				<Route path="/Blog/:id" exact>
					<Blog />
				</Route>
				<Route path="/Blogs/:filters" exact>
					<Blogs />
				</Route>
				<Route path="/CreateBlog" exact>
					<CreateBlog />
				</Route>
				
				<Route>
					<FourOFour />
				</Route>
			</Switch>
		</Router>
	)
}

export default Routes