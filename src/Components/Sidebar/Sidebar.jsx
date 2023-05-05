import './Sidebar.sass';
import SearchBox from '../SearchBox/SearchBox';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__btns">
                <button className="sidebar__button">1</button>
                <button className="sidebar__button">2</button>
                <button className="sidebar__button">3</button>
            </div>         
            <SearchBox></SearchBox>
        </div>
    );
}

export default Sidebar;
