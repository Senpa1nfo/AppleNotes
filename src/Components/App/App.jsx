import ListItem from '../ListItem/ListItem';
import Sidebar from '../Sidebar/Sidebar';
import Workspace from '../Workspace/Workspace';
import './App.sass';

function App() {
    return (
        <div className="app container">
            <Sidebar></Sidebar>
            <div className="app__wrapper">
                <ListItem></ListItem>
                <Workspace></Workspace>
            </div>
        </div>
    );
}

export default App;
