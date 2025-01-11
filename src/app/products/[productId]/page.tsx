import { Metadata } from "next";

type Props  = {
    params:Promise<{ productId: string}>;
}

export const generateMetadata = async ( {
    params,
}: Props): Promise<Metadata> => {
    const id = (await params).productId;
    return {
        title: `product id is ${id}`
    }
}

export default async function productDetails({params}: Props) {
    const productId = (await params).productId;
    return (  <div>details about product {productId}</div>);
}