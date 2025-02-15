export const randomGradient = () => {
  const colors = [
    "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
    "bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700",
    "bg-gradient-to-r from-green-400 via-teal-500 to-blue-600",
    "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600",
    "bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};