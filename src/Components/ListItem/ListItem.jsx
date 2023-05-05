import './ListItem.sass';

function ListItem() {
    return (
        <div className="listItem">
            <div className="listItem__element">
                <div className="listItem__title">title</div>
                <div className="listItem__decr">description</div>
                <div className="listItem__underline"></div>
            </div>
            <div className="listItem__element">
                <div className="listItem__title">title</div>
                <div className="listItem__decr">description</div>
                <div className="listItem__underline"></div>
            </div>
            <div className="listItem__element">
                <div className="listItem__title">title</div>
                <div className="listItem__decr">description</div>
                <div className="listItem__underline"></div>
            </div>
        </div>
    );
}

export default ListItem;
