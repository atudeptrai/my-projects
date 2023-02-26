const url = 'http://localhost:3000/users';

const fetchAPI = fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(user => {
            render(user);
        })
    })

    const table = document.querySeletor('#table');

    function render(user){
        const html = `
            <tr>
                <td>${user.id}</td>            
                <td>${user.name}</td>            
                <td>${user.email}</td>            
                <td></td>            
            </tr>
        `;

        table.insertAdjacentHTML('beforeend', html);
    }