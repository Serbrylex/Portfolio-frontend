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

const Routes = ({ url }) => {


	return(

		<Router>								
			<Switch>
				<Route path="/" exact>
					<Home url={url} />
				</Route>
				<Route path="/Blog/:id" exact>
					<Blog url={url} />
				</Route>
				<Route path="/Blogs/:filters" exact>
					<Blogs url={url} />
				</Route>

				<Route path="/Admin" exact>
					<Login />
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