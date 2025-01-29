api = 'https://api.tracker.gg/api/v2/marvel-rivals/standard/profile/ign/eevee'; //api
async function getData() {
    const url = "https://api.tracker.gg/api/v2/marvel-rivals/standard/profile/ign/eevee";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  