export default async function getIdeas() {
  try {
    const response = await fetch("/api/ideas");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
