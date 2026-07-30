import placeholder from '../assets/images/placeholder.png';

// Every JSON file references images by keyword ("placeholder") rather than a path.
// This map is the single place that resolves a keyword to a real imported asset,
// so replacing images later never requires touching JSON or component code.
const imageMap = {
  placeholder,
};

export function resolveImage(key) {
  return imageMap[key] || placeholder;
}
