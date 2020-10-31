async function getData(
  url: string,
  additionalHeaders?: { [header: string]: string }
) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...additionalHeaders,
    },
  });
  return response.json();
}

export default getData;
