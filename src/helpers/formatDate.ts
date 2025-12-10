export const formatDate = (date: string | Date) => {
  const d = new Date(date);
  return d.toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
