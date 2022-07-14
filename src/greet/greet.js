export default function greet(name = "stranger") {
  const coaches = ["Alex", "CJ"];
  if (coaches.includes(name)) {
    return `Hello Coach!`;
  }
  return `Hello ${name}!`;
}
