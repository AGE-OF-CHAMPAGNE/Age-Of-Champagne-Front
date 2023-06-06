// params: url = String "/api/recipients/13"
// return id: String "13"
export default function getIdFromUrl(url) {
  const arr = url.split("/");
  return arr[arr.length - 1];
}
