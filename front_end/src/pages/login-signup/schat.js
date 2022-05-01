import classes from './schat.module.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Schat(){

    
    return(<div>

        <Button variant="dark"><Link to="/Messages" className={classes.dir}>Start chatting...</Link></Button>{' '}
    </div>
    );
}
export default Schat;