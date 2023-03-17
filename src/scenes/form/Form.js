import {Formik} from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Button, TextField } from '@mui/material';

const initialValues = {
    firstName:"",
    lastName:"",
    email:"",
    contact:"",
    address1:"",
    address2:"",

}
export default function Form() {
  
    const isNonMobile = useMediaQuery('(min-width:600px)');

    const handleFormSubmit = (value)=>{
        console.log(value)
    }
    
    const phoneRegExp = /^(\+?88)?01[3-9]\d{8}$/;


    const userSchema = yup.object().shape({
        firstName:yup.string().required('Required'),
        lastName:yup.string().required('Required'),
        email:yup.string().email('Invalid Email').required('Required'),
        contact:yup.string().matches(phoneRegExp,'Phone Number Invalid').required('Required'),
        address1:yup.string().required('Required'),
        address2:yup.string().required('Required'),

    })


    return (
        <div>
            <h3 style={{margin:'1rem 2rem'}}>Profile Form</h3>

          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit} style={{margin:'0 1rem'}}>
                <Box 
                  display='grid'
                  gap='30px'
                  gridTemplateColumns='repeat(4,minmax(0,1fr))'
                  sx={{"& > div":{gridColumn:isNonMobile ? undefined : 'span 4'}}}
                >
                  <TextField
                    fullWidth
                    variant='filled'
                    type="text"
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    label='First Name'
                    helperText={touched.firstName && errors.firstName}
                    sx={{gridColumn:'span 2'}}
                  />
                  <TextField
                    fullWidth
                    variant='filled'
                    type="text"
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    label='Last Name'
                    helperText={touched.lastName && errors.lastName}
                    sx={{gridColumn:'span 2'}}
                  />
                  <TextField
                    fullWidth
                    variant='filled'
                    type="email"
                    name="email"
                    error={!!touched.email && !!errors.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    label='Email'
                    helperText={touched.email && errors.email}
                    sx={{gridColumn:'span 4'}}
                  />
                  <TextField
                    fullWidth
                    variant='filled'
                    type="text"
                    name="contact"
                    error={!!touched.contact && !!errors.contact}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contact}
                    label='Contact'
                    helperText={touched.contact && errors.contact}
                    sx={{gridColumn:'span 4'}}
                  />
                  <TextField
                    fullWidth
                    variant='filled'
                    type="text"
                    name="address1"
                    error={!!touched.address1 && !!errors.address1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address1}
                    label='Address 1'
                    helperText={touched.address1 && errors.address1}
                    sx={{gridColumn:'span 4'}}
                  />
                  <TextField
                    fullWidth
                    variant='filled'
                    type="text"
                    name="address2"
                    error={!!touched.address2 && !!errors.address2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address2}
                    label='Address 2'
                    helperText={touched.address2 && errors.address2}
                    sx={{gridColumn:'span 4'}}
                  />
                </Box>
                <Box display={'flex'} justifyContent={'end'} mt={'20px'}>
                     <Button onClick={handleSubmit} color={'secondary'} variant={'contained'}>
                        Create New User
                    </Button>
                </Box>
              </form>
            )}
          </Formik>
        </div>
      );
      
}
