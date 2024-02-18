class CellPhone {
  constructor(model, factory, ageModel, ageFactory, price) {
    this.model = model;
    this.factory = factory;
    this.ageModel = ageModel;
    this.ageFactory = ageFactory;
    this.price = price;
  }
}

class SamsungPhone extends CellPhone {
  constructor(model, ageModel, ageFactory, price) {
    super(model, "Samsung", ageModel, ageFactory, price);
    this.os = "Android";
  }
}

class ApplePhone extends CellPhone {
  constructor(model, ageModel, ageFactory, price) {
    super(model, "Apple", ageModel, ageFactory, price);
    this.os = "iOS";
  }
}

class XiaomiPhone extends CellPhone {
  constructor(model, ageModel, ageFactory, price) {
    super(model, "Xiaomi", ageModel, ageFactory, price);
    this.os = "HyperOS";
  }
}


const samsungS24Ultra = new SamsungPhone('S24 Ultra', '2024', '2023', '2,799.00');
const iPhone15ProMax = new ApplePhone('iPhone 15 Pro Max', '2024', '2023', '2,899.00');
const xiaomi13TPro = new XiaomiPhone('Xiaomi 13T Pro', '2024', '2023', '1,000.00');

console.log(samsungS24Ultra);
console.log(iPhone15ProMax);
console.log(xiaomi13TPro);
