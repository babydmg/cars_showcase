export const fetchCars = async () => {
  const headers = {
    'X-RapidAPI-Key': '01badbd639msh49fdb1f0b0172c7p124438jsna6c5428d7c00',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
};

export const calculateRent = async (city_mpg: number, year: number) => {
  const basedPriceDay = 50;

  const mileageFactor = 0.1;

  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basedPriceDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
