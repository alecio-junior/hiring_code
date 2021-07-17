const form = document.getElementById('formNewsletter')

var cadastro = [];

form.addEventListener( 'submit', (e) =>{
    
    e.preventDefault();
    let interesse = document.getElementById('interest').value;
    let email = document.getElementById('email').value;

    let newsletter = {
        'Interesse' : interesse,
        'Email': email,
    }

    cadastro.push(newsletter)


    let convertNewsletter = JSON.stringify(cadastro);

    console.log(convertNewsletter)

    localStorage.setItem('cadastro' , convertNewsletter);

    window.alert("cadastrado com sucesso");

})