import MsgList from "../../components/Messages/MsgList";

const Dummy_Data = [
    {
        Id: 'm1',
        Name: 'Tele',
        Username:'TEL3',
        Description: ' A qoura developer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        Prof_pic: 'https://media.istockphoto.com/photos/torn-paper-with-word-are-you-covered-picture-id1327364098?b=1&k=20&m=1327364098&s=170667a&w=0&h=akSrlflAI5ttDQcxXUR-XMjgu8FVZ7M605C40UOPLY0='

    },
    {
        Id: 'm2',
        Name: 'Pedro',
        Username:'Pedoch',
        Description: 'A JavaScript wiz Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        Prof_pic: 'https://media.istockphoto.com/photos/liability-picture-id636772794?b=1&k=20&m=636772794&s=170667a&w=0&h=iITM9gsOSX2oSDk4KnPC8tmyle_CSHeXYvP5-73bOEc='
        
    },
    {
        Id: 'm3',
        Name: 'Gbemi',
        Username:'Gbems',
        Description: 'George Mason student Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        Prof_pic: 'https://media.istockphoto.com/photos/torn-paper-with-word-are-you-covered-picture-id1327364098?b=1&k=20&m=1327364098&s=170667a&w=0&h=akSrlflAI5ttDQcxXUR-XMjgu8FVZ7M605C40UOPLY0='
        
    }
];

function Allmsg(){
    return(<section>
        <h1>Start a new converstion!</h1>
        <MsgList messages={Dummy_Data} />
    </section>
    );
}
export default Allmsg;