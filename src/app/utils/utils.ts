export async function fetchData() {
  const res = await fetch("https://scrapenimanns-c8544d688b32.herokuapp.com/");
  const data = await res.json();
  return data;
}

export const cuteBezier = [0.34, 1.56, 0.64, 1];
