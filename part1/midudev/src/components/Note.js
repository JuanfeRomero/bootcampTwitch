export const Note = ({ id = 0, title, body = '' }) => {
    return (
        <li>
            <p><strong>{id}-</strong> {title}</p>
            <small>
                {body}
            </small>
        </li>
    );
};