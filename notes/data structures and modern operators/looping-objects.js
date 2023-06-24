// property values
for (const day of Object.keys(openingHours)) console.log(day); // iterates through the object's keys

// can use for of within a template literal
let openStr = `We are open on ${Object.keys(openingHours).length} days: `;
for (const day of Object.keys(openingHours)) openStr += `${day}, `;
console.log(openStr);

// property values
for (const hours of Object.values(openingHours)) console.log(hours);

// both together - use entries() which is keys and values together
for (const [day, hours] of Object.entries(openingHours)) console.log(`${day}: ${hours}`);

// or can destructure the hours object directly
for (const [day, {open, close}] of Object.entries(openingHours)) console.log(`${day}: ${open} - ${close}`);

