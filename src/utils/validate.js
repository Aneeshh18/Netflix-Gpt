export const checkValidData = (email, password, Fullname) => {
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Not a valid email";
    
    if(!isPasswordValid) return "Not a valid password";
    
    return null;
}

export const checkValidName =(Fullname) => {
    const FullNameVal = /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(Fullname)
    if(!FullNameVal) return "Name is Not Vaild"
    return null
}