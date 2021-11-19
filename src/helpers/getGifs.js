

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )  }&limit=9&api_key=27kZcVwPRlr5aG9gKt40s4nTsopn8HIX`;
    const respu = await fetch (url);
    const { data } = await respu.json();

    // console.log(data);

    const imgGifs = data.map((img) => {
        return {
            id:     img.id,
            title:  img.title,
            url:    img.images?.downsized_medium.url
        }
    });
    // console.log(imgGifs);

    return imgGifs;

}