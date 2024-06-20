export async function fetchData() {
  const res = await fetch("https://scrapenimanns-c8544d688b32.herokuapp.com/");
  const data = await res.json();
  return data;
}
