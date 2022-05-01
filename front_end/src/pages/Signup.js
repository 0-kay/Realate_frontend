import Signupform from "./signupform";

function Signup(){
return(

// axios.post('/user', {
//             firstName: 'Fred',
//             lastName: 'Flintstone'
//           })
//           .then(function (response) {
//             console.log(response);
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
        
   
        
        <section>
            <div>
                create an account!
            </div>

            <Signupform  />            
        </section>
    );
}

export default Signup;