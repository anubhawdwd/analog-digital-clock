setInterval(() => {
  document.getElementById("digitalClock").innerHTML = `
    <h3>${new Date().toLocaleTimeString()}</h3> 
    `;
}, 1000);

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let hourHand = document.getElementById("hourHand");
  let minuteHand = document.getElementById("minuteHand");
  let secondHand = document.getElementById("secondHand");

  hourHand.style.transform = `rotate(${30 * hour + minute * 0.5 - 90}deg)`;
  minuteHand.style.transform = `rotate(${6 * minute + second * 0.1 - 90}deg)`;
  secondHand.style.transform = `rotate(${6 * second - 90}deg)`;
}, 1000);
