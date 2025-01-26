interface ApiProduct {
  id: number; // Assuming `id` is a number in the API response
  title: string;
  price: number;
  image: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data: ApiProduct[] = await response.json();
  return data.map((item) => ({
    id: item.id.toString(),
    name: item.title,
    price: item.price,
    image: item.image,
    description: item.description,
  }));
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const item: ApiProduct = await response.json();
  return {
    id: item.id.toString(),
    name: item.title,
    price: item.price,
    image: item.image,
    description: item.description,
  };
}

export async function applyOfferCode(
  code: string,
  total: number
): Promise<number> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simple offer code logic
  if (code === "DISCOUNT10") {
    return total * 0.9; // 10% discount
  } else if (code === "DISCOUNT20") {
    return total * 0.8; // 20% discount
  }
  return total; // No discount if code doesn't match
}
