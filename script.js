document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let age = parseInt(document.getElementById('age').value, 10);
        let option = document.getElementById('option').value;
        
        let recommend = document.querySelector('input[name="recommend"]:checked')?.value;

        let languageCheckboxes = document.querySelectorAll('input[name="language"]:checked');
        let language = Array.from(languageCheckboxes).map(checkbox => checkbox.value);

        let comments = document.getElementById('comments').value;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Age:', age);
        console.log('Option:', option);
        console.log('Recommend:', recommend);
        console.log('Language:', language);
        console.log('Comments:', comments);
    });
});