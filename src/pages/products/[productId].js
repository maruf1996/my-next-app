import { useRouter } from "next/router";

const product = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router=useRouter()
    return (
        <div>
            <h1>This is dynamic page of product {router.query.productId}</h1>
        </div>
    );
};

export default product;