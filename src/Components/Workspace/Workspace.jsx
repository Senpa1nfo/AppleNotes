import './Workspace.sass';

function Workspace() {
    return (
        <div className="workspace">
            <div className="workspace__date">May 10, 2018 at 12:17 PM</div>
            <textarea className="workspace__textarea" name="note" id="note"></textarea>
        </div>
    );
}

export default Workspace;
