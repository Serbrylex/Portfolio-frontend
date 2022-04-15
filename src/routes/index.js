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

const Routes = () => {


	return(

		<Router>								
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/test" exact>
					<Blog />
				</Route>
				<Route path="/blog/:id" exact>
					<Blog />
				</Route>
				<Route path="/blogs/:filters" exact>
					<Blogs />
				</Route>

				<Route path="/admin" exact>
					<Login />
				</Route>
				<Route path="/create_blog" exact>
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