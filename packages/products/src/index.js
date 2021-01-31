import faker from "faker";

const products = [];

for (let index = 0; index < 5; index++) {
  products.push(faker.commerce.productName());
}

let projectsRoot = document.getElementById("dev-products");

projectsRoot.innerHTML = products.reduce(
  (acc, project) => `${acc} <div>${project}</div>`,
  ""
);
