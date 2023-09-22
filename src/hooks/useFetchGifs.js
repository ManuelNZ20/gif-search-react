import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
  //   un hooks es una función que retorna algo
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
