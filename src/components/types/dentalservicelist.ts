interface DentalService {
    _id: string;
    isActive: boolean;
    createdOn: string;
    updatedOn: string;
    primaryImage: {
        actual: string;
        large: string;
        medium: string;
        small: string;
    };
    secondaryImageModel: {
        actual: string;
        large: string;
        medium: string;
        small: string;
    }[];
    slug: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    secondaryImages: string[];
    discount: number;
    currencyCode: string;
    isAvailable: boolean;
    stock: number;
    color: null;
    brand: string;
    priceUnit: string;
    keywords: string[];
    index: number;
    priority: number;
    username: string;
    buyOnlineLink: string;
    productVerb: null;
    type: number;
    category: string;
    categoryId: string;
    keywordList: string;
    url: string;
    warranty: string;
    techSpecs: null;
    isUsed: boolean;
    isFeatured: boolean;
    colors: null;
    sizes: null;
    shortBio: string;
}

export default DentalService;