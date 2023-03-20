import prisma from ".";

interface Product {
    name: string;
    slug: string;
    description: string;
    image: string;
    categories: string[];
    price: number;
    brand?: string;
    rating: number;
    numReviews: number;
    countInStock: string;
    isFeatured: boolean;
    banner?: string;
}


export const getProducts = async () => {
    try {
        const products = await prisma.product.findMany();
        return { products };
    } catch (error) {
        return { error };
    }
}

export const createProduct = async (product : Product) => {
    try {
        const productFromDB = await prisma.product.create({ data: product })
        return { product: productFromDB };
    } catch (error) {
        return { error };
    }
}

export const getProductById = async (id:string) => {
    try {
        const product = await prisma.product.findUnique({ where: { id } });
        return { product };
    } catch (error) {
        return { error };
    }
}
