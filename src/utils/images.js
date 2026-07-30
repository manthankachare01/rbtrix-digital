import placeholder from '../assets/images/placeholder.png';
import product1 from "../assets/images/products/product1.png";
import product2 from "../assets/images/products/product2.png";
import product3 from "../assets/images/products/product3.png";
import product4 from "../assets/images/products/product4.png";
import product5 from "../assets/images/products/product5.png";
import product6 from "../assets/images/products/product6.png";
import friends_cafe from "../assets/images/delivered/friends_cafe.png";
import cafe_dreams from "../assets/images/delivered/cafe_dreams.png";

// Every JSON file references images by keyword ("placeholder") rather than a path.
// This map is the single place that resolves a keyword to a real imported asset,
// so replacing images later never requires touching JSON or component code.
const imageMap = {
  placeholder,
  "product1": product1,
  "product2": product2,
  "product3": product3,
  "product4": product4,
  "product5": product5,
  "product6": product6,
  "friends_cafe": friends_cafe,
  "cafe_dreams": cafe_dreams,
};

export function resolveImage(key) {
  return imageMap[key] || placeholder;
}
