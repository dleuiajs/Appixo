export function getImgUrl(imgUrlFromJson: string): string {
    return new URL('/Appixo/images/' + imgUrlFromJson, import.meta.url).href;
}
