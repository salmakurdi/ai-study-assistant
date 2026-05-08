import apiClient from './apiClient';

const mapProperty = (product) => ({
  id: product.id,
  title: product.title,
  image: product.thumbnail,
  price: product.price,
  location: product.brand || 'Unknown location',
  description: product.description,
});

export const propertyService = {
  async getProperties() {
    try {
      const { data } = await apiClient.get('/products?limit=9');
      return (data.products || []).map(mapProperty);
    } catch {
      return [
        { id: 1, title: 'Fallback Villa', image: 'https://picsum.photos/400/240', price: 240000, location: 'Amman', description: 'Graceful villa with fallback mock data.' },
      ];
    }
  },
};
