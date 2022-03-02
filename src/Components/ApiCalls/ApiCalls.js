export default async function getShopData() {
	try {
		const response = await fetch('/ShopData.json');
		const shopData = errorHandler(response);
		return shopData
	} catch(error) {
		throw new Error(error.message)
	}
}

const errorHandler = (response) => {
  if (!response.ok) {
    throw new Error(response.message);
  } else {
    return response.json();
  }
}