import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer, Signin } from './components';
import { BlogList } from './pages/BlogList/BlogList';
import { Gallery } from './pages/Gallery/Gallery';
import { SingleBlog } from './pages/SingleBlog/SingleBlog';
import { Team } from './pages/Team/Team';
import { THEME } from './theme';

function App() {
	return (
		<MuiThemeProvider theme={THEME}>
			<Router>
				<GlobalStyle />
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/team" exact component={Team} />
					<Route path="/blog" exact component={BlogList} />
					<Route path="/signin" exact component={Signin} />
					<Route path="/gallery" exact component={Gallery} />
					<Route path="/blog/:id" exact component={SingleBlog} />
				</Switch>
				<Footer />
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
