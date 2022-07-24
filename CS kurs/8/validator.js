class Validator {
    constructor(config) {
        this.elementConfig = config;
        this.errors = {};

        this.generateErrorsObject();
        this.inputListener();
    }

    generateErrorsObject() {
        for (let field in this.elementConfig) {
            this.errors[field] = [];
        }
    }

    inputListener() {
        let inputSelector = this.elementConfig;

        for (let field in inputSelector) {
            let selector = `input[name="${field}"]`;
            let el = document.querySelector(selector);

            el.addEventListener('input', this.validate.bind(this));
        }
    }

    validate(e) {
        let elFields = this.elementConfig;

        let field = e.target;
        let fieldName = field.getAttribute('name');
        let fieldValue = field.value;

        this.errors[fieldName] = [];

        if (elFields[fieldName].required) {
            if (fieldValue === '') this.errors[fieldName].push('Polje je prazno');
        }

        if (elFields[fieldName].email) {
            if (!this.validateEmail(fieldValue)) this.errors[fieldName].push('Neispravna adresa');
        }

        if (fieldValue.length < elFields[fieldName].minLength || fieldValue.length > elFields[fieldName].maxLength) this.errors[fieldName].push(`Polje mora imati minimalno ${elFields[fieldName].minLength}, a maksimalno ${elFields[fieldName].maxLength}`);

        if (elFields[fieldName].matching) {
            let matchingEl = document.querySelector(`input[name="${elFields[fieldName].matching}"]`);

            if (fieldValue !== matchingEl.value) {
                this.errors[fieldName].push('Lozinke se ne poklapaju');
            }

            if (this.errors[fieldName].length === 0) {
                this.errors[fieldName] =[];
                this.errors[elFields[fieldName].matching] =[];
            }
        }

        if (elFields[fieldName].numberOnly) {
            
            if (isNaN(fieldValue)) this.errors[fieldName].push('Bolje sme da sadrzi samo brojeve');
        
        }

        this.populateErrors(this.errors);
    }

    populateErrors(errors) {
        for (const elem of document.querySelectorAll('ul')) {
            elem.remove();
        }

        for (let key of Object.keys(errors)) {
            let parentElement = document.querySelector(`input[name="${key}"]`).parentElement;
            let errorsElement = document.createElement('ul');
            parentElement.appendChild(errorsElement);

            errors[key].forEach(error => {
                let li = document.createElement('li');
                li.innerText = error;

                errorsElement.appendChild(li);
            });
        }
    }
    validateEmail = email => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
        return false;
    }
}