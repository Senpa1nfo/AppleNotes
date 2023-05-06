import './Sidebar.sass';
import { useContext } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import add from '../../Resources/Icons/add.svg';
import del from '../../Resources/Icons/delete.svg';
import edit from '../../Resources/Icons/editing.svg';
import delGrey from '../../Resources/Icons/delete-grey.svg';
import editGrey from '../../Resources/Icons/editing-grey.svg';
import { Context } from '../..';

function Sidebar() {

    const store = useContext(Context);

    return (
        <div className="sidebar">
            <div className="sidebar__btns">
                <button className="sidebar__button"
                    onClick={() => {store.DB.add()}}    
                    >
                    <img src={add} alt="" className="sidebar__img" />
                </button>
                <button className="sidebar__button">
                    <img src={delGrey} alt="" className="sidebar__img" />
                </button>
                <button className="sidebar__button">
                    <img src={editGrey} alt="" className="sidebar__img" />
                </button>
            </div>         
            <SearchBox></SearchBox>
        </div>
    );
}

export default Sidebar;
