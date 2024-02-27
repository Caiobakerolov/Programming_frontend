const multiplication = (area: number, height: number) => area * height;
console.log(multiplication(31, 4));


class Contact {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  salutation(): string {
    return `Hello ${this.name}`;
  }  
}

const contact = new Contact("Caio");
console.log(contact.salutation());