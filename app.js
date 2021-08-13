const inputs = document.querySelectorAll("input");



const pattern = {
    telephone: /^[0-9]{10}$/, //"\d - match any digits from 0-9 "
    username: /^[a-z\d]{5,12}$/i, //i - goes for ignoring both the uppercase and the lowercase
    password: /^[\w@-]{8,20}$/i,  // \w - means include a-z, 0-1, also _ under one roof 
    slug: /^[a-z\d-]{8,20}$/,  // [!#@-_] - all these characters will be included along with the ones that are within the bracket.
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ // ? indicates that this is optional
}

function validate(field, regex) {
    // console.log(regex.test(field.value));
    if (regex.test(field.value)) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        console.log(e.target.attributes.name.value);
        validate(e.target, pattern[e.target.attributes.name.value])
    })
})
