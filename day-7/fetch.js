

document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.querySelector(".blog");

    fetch('https://notpadd.vercel.app/api/public', {

        headers: {
            USER_KEY: "dXNlcl8ybEV3VFYzdks0WkliaEpHaVVVbWdSUHZrMW8",
            USER_SECRET: "NTJkODNkZGUtNWM4Ny00MjNmLWJlMWQtY2EwOTZiNzM2ZDQ3",
            all: true,
            public_only: true
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP server error ${response.status}`)
            }
            return response.json()
        })

        .then(data => {
            data.forEach(element => {
                const blogElement = document.createElement('div');
                blogElement.classList.add('blog');

                blogElement.innerHTML = `<h2>${element.title}</h2> <p>${element.description}</p>
                <img src="${element.displayImage}">`

                
                blogContainer.appendChild(blogElement)


            });
            console.log(data);
            
        })

        .catch(error => {
            console.error(`Internal server error: ${error}`);

        })
})


