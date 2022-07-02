const apiEndpoint = `${process.env.REACT_APP_PROXY_SERVER}/hotpepper/gourmet/v1`;

export interface ShopItem {
  name: string;
  station_name: string;
  catchCopy: string;
  id: string;
  catch: string;
  photo: {
    pc: {
      l: string;
    };
  };
  urls: {
    pc: string;
  };
  lat: number;
  lng: number;
}

interface GourmetResponse {
  results: {
    shop: ShopItem[];
    results_available: number;
    results_returned: string;
  };
}

interface ErrorResponse {
  results: {
    error: any;
  };
}

export type APIResponse = GourmetResponse | ErrorResponse;

const apiKey = process.env.REACT_APP_HOTPEPPER_API_KEY;

const fetchRestaurants = async (query = "") => {
  const response = await fetch(
    `${apiEndpoint}/?key=${apiKey}&large_area=Z011&format=json&count=12&genre=g013&keyword=${query}`
  );
  const data: APIResponse = await response.json();

  return data;
};

export { fetchRestaurants };
