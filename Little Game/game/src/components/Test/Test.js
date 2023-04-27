import { Link } from 'react-router-dom';

export const Test = () => {
    return(
        <div>
            <h1>Hello Test</h1>
            <Link to={'/true'}>True</Link>
            <Link to={'/false'}>False</Link>
        </div>
    )
}
