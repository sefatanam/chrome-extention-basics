
let list = document.getElementById('list');

async function fetchArticles()
{
    try
    {
        const response = await fetch("https://dev.to/api/articles?username=sefatanam")

        if (response.ok)
        {
            const data = await response.json();

            Array.from(data).forEach((article) =>
            {
                let el = document.createElement('article');
                let p = document.createElement('p');
                p.innerText = article.title;
                el.appendChild(p);
                list.appendChild(el);
            })
        }
    } catch (err)
    {
        console.log(err);
    }
}

fetchArticles();