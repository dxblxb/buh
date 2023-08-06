const url = "https://buh.foto-lavka.ru/api?";
export async function getData(filter) {
  const res = await fetch(url + new URLSearchParams(filter)).then((res) =>
    res.json()
  );
  return res;
}
