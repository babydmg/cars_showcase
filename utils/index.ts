export const fetchCars = async () => {
  const headers = {
    'X-RapidAPI-Key': '01badbd639msh49fdb1f0b0172c7p124438jsna6c5428d7c00',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
};
