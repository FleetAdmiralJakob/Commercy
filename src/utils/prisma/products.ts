import prisma from ".";

export const getProducts = async () => {
    try {
        const products = await prisma.product.findMany();
        return { products };
    } catch (error) {
        return { error };
    }
}

export const createProduct = async (product:any) => {
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
