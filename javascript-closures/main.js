function graduate(credential) {
  return function (fullName) {
    return `${fullName} ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('medicalSchool:', medicalSchool('Daniel Yeh'));
console.log('lawSchool:', lawSchool('Daniel Yeh'));
