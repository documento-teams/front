export default async function Home() {
    const data = await fetch(VITE_URL_API)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
        console.log(data);
    }

    