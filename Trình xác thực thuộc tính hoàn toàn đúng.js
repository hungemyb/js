function aa(arr, property) {
  return arr.every(obj => Boolean(obj[property]));
}
console.log(
  truthCheck(
    [
      { name: 'Quincy', role: 'Founder', isBot: false },
      { name: 'Naomi', role: '', isBot: false },
      { name: 'Camperbot', role: 'Bot', isBot: true },
    ],
    'isBot'
  )
);
