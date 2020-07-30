const validateUser = () =>{
    const sessionUser = sessionStorage.getItem("usuario")
    const data = JSON.parse(sessionUser)
    if(!data) {
        window.location.href="/"
    }else{
        
    }
}

validateUser();