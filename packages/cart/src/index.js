import faker from "faker";

const cartMessage = `You have ${faker.random.number()} items on your cart.`;

document.querySelector("#cart").innerHTML = cartMessage;
