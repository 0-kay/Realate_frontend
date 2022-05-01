import head_liner from './images/head_liner.svg';
import questions from './images/questions.svg';
import community from './images/community.svg';
import IMG_1377 from './images/IMG_1377.jpg';
import classes from './Home.module.css';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';


function Homepage(){

    return ( 
    <section >
    <section className="bg-light text-secondary p-5 text-sm-start">
     
            <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
               <Fade bottom>
            <div>
                <h1 className={classes.major}>Sign up with <span className="text-warning">Realate!</span></h1>


                 <p className="lead">Join Realate today and be able to connect with individuals accross the world! relax! chat! and connect!</p>

                <p className="btn btn-secondary btn-lg"  role="button"><Link to='/Sign-up' className={classes.su}> Connect Today!</Link></p>
                </div>
                <img className="img-fluid w-50 d-none d-sm-block" src={head_liner} alt="first" />
                </Fade>
        </div>
    </div>
    
</section>

<section className=" bg-light text-secondary p-5">

    <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
            <Fade bottom>
    <img className="img-fluid w-50 d-none d-sm-block" src={questions} alt="second" />
        <div>
    <h1 className={classes.major}>What is the <span className="text-warning">Realate</span> about?</h1>
            <p className="lead"><span className="text-warning">Realate</span> is a web appliaction built by Ojedele Kayode to give it's users the ability to communicate with anyone in the world with certain settings put in place by the user, An Example of such Settings is Language where it places a barrier to people accross the world.</p>
            
        </div> 
        </Fade>
    </div>
    </div>
   
    
</section>


<section className="bg-light text-secondary p-5 text-sm-start">

    <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">

<Fade bottom>
            <div>
                <h1 > Join the <span className="text-warning">Community!</span> <div>Find a <span className="text-warning">Family</span></div></h1>
            </div>
            <img className="img-fluid w-50 d-none d-sm-block" src={community} alt="thirf" /> 
            </Fade>
        </div>
    </div>
    
    
</section>


<section  className=" bg-light text-secondary p-5 text-sm-start">

    <div className={classes.last} >
        <div className="d-sm-flex  flex-right">
            <img className="img-fluid rounded-circle flex-left" src={IMG_1377} width="304" height="236"  alt="fourth"/>
            <div>
                <Fade bottom>
                <h1 className={classes.who}>About the <span className="text-warning">Developer</span>
                <p>OJEDELE KAYODE</p></h1>


                <div className={classes.who}>I'm a young, Experienced Java Software Engineer with a demonstrated history of working in the information technology and services industry, as well as Knowledge in HTML, CSS and Bootstrap. Skilled in Logo Design, Adobe Illustrator, Adobe Photoshop with Active Teamwork and Independent Thinking. Strong engineering professional with a Bachelor of Science - BS focused in Computer Science from Babcock university. <p /><a className="btn btn-secondary btn-lg" href="https://www.linkedin.com/in/ojedelekayodeek/" role="button">Go to Linkedin...</a> </div>

                </Fade>
            </div>


        </div>
    </div>
    
    
</section>
</section>
    );;
}

export default Homepage;