import {useState} from 'react'; 
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const Register = (props) =>{

    let history = useNavigate();

    const [data, setData]=useState({
        stuid:"",
        firstname:"",
        lastname:"",
        othername:"",
        email:"",
        phone_number:"",
        dob:"",
        level:"",
    })

    const handleChange = (e) => {

         setData({ ...data, [e.target.name]: e.target.value });

         console.log(data);
    }

    const submitForm=(e)=>{

        e.preventDefault();

        const sendData = {

            stuid:data.stuid,
            firstname:data.firstname,
            lastname:data.lastname,
            othername:data.othername,
            email:data.email,
            phone_number:data.phone_number,
            dob:data.dob,
            level:data.level
        }

            axios.post('http://localhost/REACT%20APPS/osrs/src/insert.php', sendData).then((result)=>{ 
                if(result.data.Status === 'Invalid'){
                    alert('Invalid User');
                }
                else{
                    history('/Report');
                }

            })
                
        }

    return(
        <div className="main-box">
            <form onSubmit={submitForm}>
            <div className="row">
                <div className="col-md-12 text-center"><h1>Register</h1></div>
            </div>

            <div className="row">
                <div className="col-md-6"><input type="text" className='form-control' placeholder='STU-ID E.g (STU001)' required name="stuid" onChange={handleChange} value={data.stuid} /></div>
            </div>

            <div className="row">
                <div className="col-md-6"><input type="text" className='form-control' placeholder='Firstname' required name="firstname" onChange={handleChange} value={data.firstname} /></div>
            </div>

            <div className="row">
                <div className="col-md-6"><input type="text" className='form-control' placeholder='Lastname' required name="lastname" onChange={handleChange} value={data.lastname} /></div>
            </div>

            <div className="row">
                <div className="col-md-6"><input type="text" className='form-control' placeholder='Othername' name="othername" onChange={handleChange} value={data.othername} /></div>
            </div>

            <div className="row">
                <div className="col-md-6"><input type="email" className='form-control' placeholder='Email' required name="email" onChange={handleChange} value={data.email}/></div>
            </div>


            <div className="row">
                <div className="col-md-6"><input type="text" className='form-control' maxLength={15} required placeholder='Phone Number' name="phone_number" onChange={handleChange} value={data.phone_number} /></div>
            </div>
            
            <div className="row">
                <div className="col-md-6"><strong>DOB</strong><input type="date" className='form-control' required name="dob" onChange={handleChange} value={data.dob} /></div>
            </div>

            <div className="row">
                <div className="col-md-6"><input type="number" className='form-control' placeholder='Level' required name="level" onChange={handleChange} value={data.level} /></div>
            </div>

            <div className="row">
                <div className="col-md-6 text-center"><input type="submit" className='btn btn-success' Value="REGISTER" name="submit" /></div>
            </div>
</form>
        </div>
    )
    
}

export default Register;