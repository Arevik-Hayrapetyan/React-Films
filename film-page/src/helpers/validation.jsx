export function isValidName(name){
    const nameChecker = /^[a-zA-Z ]{2,30}$/
    const isValidName = nameChecker.test(name)
    if(isValidName) return true;
    return false
}

export function isValidPassword(password){
    const passwordChecker = /^[a-zA-Z ]{2,30}$/
    const isValidPassword = passwordChecker.test(password)
    if(isValidPassword) return true;
    return false
}