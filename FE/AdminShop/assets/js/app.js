var host = 'http://localhost:62284/';
//GetAllBrand
fetch(`${host}api/brand/get-all-brand`,
    {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Access-Control-Allow-Origin' : `${host}`
        }
    })
    .then(response => response.json())
    .then(data => {
        var listOutPut = "";
        data.map((item) => {
            listOutPut += `<tr><td>${item.name}</td><td>${item.description}</td></tr>`
        })
        $('.table-test').empty();
        $('.table-test').append(listOutPut);
    })
//ShowAllBrand
function ShowBrandList() {
    
}