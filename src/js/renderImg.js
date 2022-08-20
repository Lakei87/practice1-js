function createImg(item) {
    const { userImageURL } = item;
    return `${userImageURL !== ''
        ? `<li class="gallery__item">
    <img src="${userImageURL}" alt="" loading="lazy">
    </li>`
        : ''}`
}

function generateImg(images) {
    return images.reduce((acc, img) => {
        return acc + createImg(img);
    }, '')
}

export default function appendImg(data) {
    const articlesArr = generateImg(data);
    return articlesArr;
}

