export const preloadImages = async (sources: string[]) => {
  await Promise.all(sources.map(src => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = src;
    });
  }));
}