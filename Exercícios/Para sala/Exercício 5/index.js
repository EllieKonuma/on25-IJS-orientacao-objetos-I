class Employee {
  #id;
  #firstName;
  #lastName;
  #salary;
  constructor(id, firstName, lastName, salary) {
    this.#id = id;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#salary = salary;
  }
  get id() {
    return this.#id;
  }
  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get name() {
    return `${this.#firstName} ${this.#lastName}`;
  }
  get salary() {
    return this.#salary;
  }
  set salary(salaryInt) {
    this.#salary = salaryInt;
  }
  get annualSalary() {
    return this.#salary * 12;
  }
  raiseSalary(intPersent) {
    this.#salary += this.#salary * intPersent;
    console.log(this.#salary);
  }
  returnEmployee() {
    const employee = `id: ${this.#id}, name: ${this.name}, salary: ${
      this.#salary
    }`;
    return;
  }
}

let monica = new Employee(123, "Monica", "Silva", 1000);

console.log(monica); // tem que ficar um obj vaziu pq esta tudo privado com #

console.log(monica.id);
console.log(monica.firstName);
console.log(monica.lastName);
console.log(monica.name);
console.log(monica.annualSalary);
