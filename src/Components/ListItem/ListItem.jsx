import { useState, useContext, useEffect } from 'react';
import { Context } from '../..';
import './ListItem.sass';

function ListItem() {

    const [items, setItems] = useState([]);
    const store = useContext(Context);

    useEffect(() => {
        store.DB.getElements().then(res => {
            setItems(res.records);
        });
    }, [])

    if (items[0]) {
        console.log(items[0].values);;
    }

    return (
        <div className="listItem">
            <div className="listItem__element">
                <div className="listItem__title">title</div>
                <div className="listItem__descr">description</div>
                <div className="listItem__underline"></div>
            </div>
            {items.map(element => (
                <div key={element.id} className="listItem__element">
                    <div className="listItem__title">{Object.values(element.values)[0]}</div>
                    <div className="listItem__descr">{Object.values(element.values)[0]}</div>
                    <div className="listItem__underline"></div>
                </div>
            ))}
        </div>
    );
}

export default ListItem;
