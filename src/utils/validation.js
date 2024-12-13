 const validateForm = (email,password)=>{
    
    const errors = {} // creating an errors object to maintain each fields error

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isEmailValid) {
      errors.email = "Please enter a valid email address"
    }

    if(!isPassValid){
      errors.password = "Please enter a valid Password";
    }

    return errors;
}

export default validateForm;