export async function getUsers() {
   const response = await fetch('https://gorest.co.in/public/v2/users');
   const result = response.json();
   return result;
}
