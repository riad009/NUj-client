export default {
  // api_url: import.meta.env.VITE_api_url,
  api_url: "https://nu-j-server.vercel.app/api/v1",
  // api_url: "http://localhost:5001/api/v1",
  openai_key: import.meta.env.VITE_openai_key,
  openai_api_url: import.meta.env.VITE_openai_api_url,
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
