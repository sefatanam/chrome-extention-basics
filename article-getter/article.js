
let list = document.getElementById('list');

async function fetchArticles()
{
    try
    {
        const response = await fetch("https://dev.to/api/articles")

        if (response.ok)
        {
            const data = await response.json();

            Array.from(data).forEach((article) =>
            {
                let el = document.createElement('article');
                let a = document.createElement('a');
                a.innerText = article.title;
                a.href = article.url;
                a.target = "_blank"
                el.appendChild(a);
                list.appendChild(el);
            })
        }
    } catch (err)
    {
        console.log(err);
    }
}

fetchArticles();


document.getElementById("searchBtn").addEventListener('click', async () =>
{
    const username = document.getElementById("searchBox").value;
    const response = await fetch(`https://dev.to/api/articles?username=${username}`)

    if (response.ok)
    {
        list.innerHTML = null;
        const data = await response.json();

        if (data.length > 1)
        {

            Array.from(data).forEach((article) =>
            {
                let el = document.createElement('article');
                let a = document.createElement('a');
                a.innerText = article.title;
                a.href = article.url;
                a.target = "_blank"
                el.appendChild(a);
                list.appendChild(el);
            })
        } else
        {
            list.innerHTML = `<p>No Article found for this ${username}`;
        }

    }

})