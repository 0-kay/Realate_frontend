import MsgItem from './MsgItem';
import classes from './MsgList.Module.css'


function MsgList(props){
    return(
          <ul className={classes.msglist}>
                {props.messages.map(message => 
                <MsgItem
                key={message.Id}
                Id={message.Id}
                Name={message.Name}
                Username={message.Username}
                Description={message.Description}
                Prof_pic={message.Prof_pic}
                />
                )
                }
          </ul>
    );
}

export default MsgList;