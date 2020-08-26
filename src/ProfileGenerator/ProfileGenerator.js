const faker = require("faker");

function getProfile() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    suffix: faker.name.suffix(),
    sex: faker.name.gender(),
    married: faker.random.boolean(),
    cellPhone: faker.phone.phoneNumber(),
    vehicle: faker.vehicle.vehicle(),
    address1: faker.address.streetAddress(),
    address2: faker.address.secondaryAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    job: faker.name.jobTitle(),
    jobDepartment: faker.commerce.department(),
    salary: faker.random.number(),
  };
}

function getNProfiles(count = 10) {
  let profiles = [];
  for (let i = 0; i <= count; i++) {
    profiles.push(getProfile());
  }
  return profiles;
}

module.exports = getNProfiles;
