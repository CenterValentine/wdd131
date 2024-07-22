const currentyear = new Date().getFullYear();
const lastModified = new Date();

document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
document.getElementById("currentyear").textContent = `© ${currentyear} David Valentine - Utah, Anartica`;