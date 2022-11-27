const person = {
    first: 'Ion',
    last: 'Creanga',
    company: 'Amintiri din copilarie SRL'
};

const displayName = ({ first, company }) => {
    console.log(`Name: ${first}, Company: ${company}`);
};

displayName(person);