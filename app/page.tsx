import { Suspense } from "react";
import { getProducts } from "./services/api";
import ClientProductGrid from "@/components/ClientProductGrid";
import LoadingSpinner from "@/components/LoadingSpinner";
import Image from "next/image";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="">
      <Image
        src="/images/shop-more-save.png"
        alt="Logo"
        width={1920}
        height={0}
      />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-light uppercase my-8">
          Featured{" "}
          <strong className="font-semibold text-blue-800">Products</strong>
        </h1>
        <Suspense fallback={<LoadingSpinner />}>
          <ClientProductGrid initialProducts={products} />
        </Suspense>
      </div>
    </div>
  );
}
