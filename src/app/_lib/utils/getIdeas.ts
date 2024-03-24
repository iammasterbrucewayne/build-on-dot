export default async function getIdeas() {
  try {
    const response = await fetch("/api/ideas");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
