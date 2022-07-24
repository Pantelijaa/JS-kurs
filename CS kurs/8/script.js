let config = {
    'ime_prezime': {
        required: true,
        minLength: 3,
        maxLength: 50
    },

    'korisnicko_ime': {
        required: true,
        minLength: 5,
        maxLength: 50
    },

    'email': {
        required: true,
        email: true,
        minLength: 5,
        maxLength: 50
    },

    'broj_telefona': {
        minLength: 9,
        maxLength: 13
    },

    'zip_code': {
        required: true,
        minLength: 0,
        maxLength: 5,
        numberOnly: true
    },

    'lozinka': {
        required: true,
        minLength: 7,
        maxLength: 25,
        matching: 'ponovi_lozinku'
    },

    'ponovi_lozinku': {
        required: true,
        minLength: 7,
        maxLength: 25,
        matching: 'lozinka'
    }
};

let validator = new Validator(config);