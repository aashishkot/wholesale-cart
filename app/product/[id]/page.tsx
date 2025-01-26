import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct } from "@/app/services/api";
import AddToCartButton from "@/components/AddToCartButton";
import AddToWishlistButton from "@/components/AddToWishlistButton";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col container mx-auto md:flex-row my-11 gap-8">
      <div className="md:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={0}
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
        <p className="mb-6">{product.description}</p>
        <div className="flex space-x-4">
          <AddToCartButton product={product} />
          <AddToWishlistButton product={product} />
        </div>
      </div>
    </div>
  );
}
