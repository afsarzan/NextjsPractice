export default async function productDetails({params}: {
    params: Promise<{ productId: string}>
}) {
    const productId = (await params).productId;
    return (
        <div>details about product {productId}</div>
    );
}