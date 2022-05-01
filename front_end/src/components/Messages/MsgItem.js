import classes from './MsgItem.Module.css'



function MsgItem(props){
    return(
       
        
    
        <li>
            <div className={classes.msg}>
                <img src={props.Prof_pic} alt={props.Username} />

        
        <div className={classes.container}>
            <h3 className={classes.nam}>{props.Name} </h3>
            <h6>{props.Username}</h6>
            <p>{props.Description}</p>
            
       <p><button>Start conversation!
        </button></p>
       
       </div>
       </div>
            
    
        
        
    </li>
    );
}

export default MsgItem;