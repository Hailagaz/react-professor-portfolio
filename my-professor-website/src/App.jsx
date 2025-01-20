import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProfessorInfo from './components/ProfessorInfo';
import SocialAccounts from './components/SocialAccounts';
import Blog from './components/Blog';
import CV from './components/CV';
import Photographs from './components/Photographs';
import Resources from './components/Resources';
import Presentations from './components/Presentations';
import Shop from './components/Shop';
import Publications from './components/Publications';
import Rewards from './components/Rewards';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Header />
					<ProfessorInfo />
					<SocialAccounts />
					<Blog />
					<CV />
					<Photographs />
					<Resources />
					<Presentations />
					<Shop />
					<Publications />
					<Rewards />
					<Portfolio />
					<ContactForm />
					<Footer />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;