import { CarProps, FilterProps } from '@/types';

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, fuel, year, limit, model } = filters;

  const headers = {
    'X-RapidAPI-Key': '01badbd639msh49fdb1f0b0172c7p124438jsna6c5428d7c00',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  console.log(limit);

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers,
    }
  );

  const result = await response.json();
  // console.log(typeof String(limit));

  return result;
};

export const calculateRent = (city_mpg: number, year: number) => {
  const basedPriceDay = 50;

  const mileageFactor = 0.1;

  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basedPriceDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const getCarImageURL = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
