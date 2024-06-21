export const login = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'isaacvwarui@gmail.com' && password === 'password123') {
        resolve('Login successful');
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000); 
  });
};
