import { useEffect, useState } from "react";
import RGBaster from "rgbaster";

export function useBg(imageUrl) {
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        if (!imageUrl) return;

        // Verifica se o import da imagem é um objeto (ex: import me from '@/img/me.png')
        const imgSrc = typeof imageUrl === "object" && imageUrl.default
            ? imageUrl.default
            : imageUrl;

        RGBaster(imgSrc)
            .then(result => {
                if (result && result.dominant) {
                    setColor(result.dominant);
                } else {
                    console.warn("Nenhuma cor dominante encontrada");
                }
            })
            .catch(err => {
                console.error("Erro ao extrair cor:", err);
            });
    }, [imageUrl]);

    return color;
}