import { data } from '../../data';

class ProductFactory {
    static createProductByType(type) {
        const validTypes = ['fruta', 'verdura', 'legume', 'hortalica', 'outro'];
        if (!validTypes.includes(type)) {
            return []; // Retorna um array vazio se o tipo não for reconhecido
        }
        return data.filter(product => product.type === type);
    }
}

export default ProductFactory;
