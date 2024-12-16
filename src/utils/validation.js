 const validateForm = (email,password,name)=>{
    
    const errors = {} // creating an errors object to maintain each fields error

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = /^[A-Za-z ]+$/.test(name);

    if(!isEmailValid) {
      errors.email = "Please enter a valid email address"
    }

    if(!isPassValid){
      errors.password = "Please enter a valid Password";
    }

    if(!isNameValid){
      errors.name = "Please enter a valid Name";
    }

    return errors;
}

export default validateForm;