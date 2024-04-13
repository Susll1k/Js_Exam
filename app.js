let nameCon=document.querySelector('.name')
let btn=document.querySelector('.btn')
let btnSort=document.querySelector('.btn2')
let select = document.querySelector('.sel')

var dictionary = [];


fetch(`https://restcountries.com/v3.1/all`)
    .then((response)=> response.json())
    .then((data)=> {
        for(let i=0; i<data.length; i++){
            
            if( data[i].altSpellings[1] === undefined){
                continue
            }

            priceFlag=Math.floor(Math.random() * (1990 - 125) + 125)
            dictionary.push([data[i].altSpellings[1], priceFlag, Object.values(data[i].languages), data[i].population, Object.values((Object.values(data[i].currencies))[0]), data[i].flags.svg])


            const block = document.createElement('div')
            block.classList.add('block')

            const image = document.createElement('img')
            image.classList.add('img')

            const title = document.createElement('h2')
            title.textContent=data[i].altSpellings[1]
            const price = document.createElement('h3')
            price.textContent=`Price: ${priceFlag}$`
            const descrip = document.createElement('h2')
            descrip.textContent=`Описание`
            const population = document.createElement('h4')
            population.textContent=`Население: ${data[i].population}`
            const language = document.createElement('h4')
            language.textContent=`Язык: ${Object.values(data[i].languages)}`
            const currencies = document.createElement('h4')
            currencies.textContent=`Валюта: ${Object.values((Object.values(data[i].currencies))[0])}`

            image.src = data[i].flags.svg
            block.append(image)
            block.append(title)
            block.append(price)
            block.append(descrip)
            block.append(population)
            block.append(language)
            block.append(currencies)



            document.querySelector('.contries').append(block)


        }
    
    })


btn.addEventListener('click', function(){
    document.querySelector('.contries').textContent=''
    if(nameCon.value===''){
        for(let i=0; i<dictionary.length; i++){



            const block = document.createElement('div')
            block.classList.add('block')

            const image = document.createElement('img')
            image.classList.add('img')

            const title = document.createElement('h2')
            title.textContent=dictionary[i][0]
            const price = document.createElement('h3')
            price.textContent=`Price: ${dictionary[i][1]}$`
            const descrip = document.createElement('h2')
            descrip.textContent=`Описание`
            const population = document.createElement('h4')
            population.textContent=`Население: ${dictionary[i][3]}`
            const language = document.createElement('h4')
            language.textContent=`Язык: ${Object.values(dictionary[i][2])}`
            const currencies = document.createElement('h4')
            currencies.textContent=`Валюта: ${Object.values(dictionary[i][4])}`

            image.src = dictionary[i][5]
            block.append(image)
            block.append(title)
            block.append(price)
            block.append(descrip)
            block.append(population)
            block.append(language)
            block.append(currencies)



            document.querySelector('.contries').append(block)


        }}
        
    
    fetch(`https://restcountries.com/v3.1/name/${nameCon.value}`)
    .then((response)=> response.json())
    .then((data)=> {
        for(let i=0; i<data.length; i++){


            console.log(data[i]);

            const block = document.createElement('div')
            block.classList.add('block')

            const image = document.createElement('img')
            image.classList.add('img')

            const title = document.createElement('h2')
            title.textContent=data[i].altSpellings[1]
            const price = document.createElement('h3')
            price.textContent=`Price: ${Math.floor(Math.random() * (1990 - 125) + 125)}$`
            const descrip = document.createElement('h2')
            descrip.textContent=`Описание`
            const population = document.createElement('h4')
            population.textContent=`Население: ${data[i].population}`
            const language = document.createElement('h4')
            language.textContent=`Язык: ${Object.values(data[i].languages)}`
            const currencies = document.createElement('h4')
            currencies.textContent=`Валюта: ${Object.values((Object.values(data[i].currencies))[0])}`

            image.src = data[i].flags.svg
            block.append(image)
            block.append(title)
            block.append(price)
            block.append(descrip)
            block.append(population)
            block.append(language)
            block.append(currencies)



            document.querySelector('.contries').append(block)


        }
    
    })
    
})
// dictionary.sort(function(a, b){
//     console.log(a[1] - b[1]);
//     return a[1] - b[1]
// })
btnSort.addEventListener('click', function(){
    document.querySelector('.contries').textContent=''
    
    if (select.value==='>'){
        dictionary.sort(function(a, b){
            return a[1] - b[1]
        })
        for(let i=0; i<dictionary.length; i++){
            const block = document.createElement('div')
            block.classList.add('block')

            const image = document.createElement('img')
            image.classList.add('img')

            const title = document.createElement('h2')
            title.textContent=dictionary[i][0]
            const price = document.createElement('h3')
            price.textContent=`Price: ${dictionary[i][1]}$`
            const descrip = document.createElement('h2')
            descrip.textContent=`Описание`
            const population = document.createElement('h4')
            population.textContent=`Население: ${dictionary[i][3]}`
            const language = document.createElement('h4')
            language.textContent=`Язык: ${Object.values(dictionary[i][2])}`
            const currencies = document.createElement('h4')
            currencies.textContent=`Валюта: ${Object.values(dictionary[i][4])}`

            image.src = dictionary[i][5]
            block.append(image)
            block.append(title)
            block.append(price)
            block.append(descrip)
            block.append(population)
            block.append(language)
            block.append(currencies)

            document.querySelector('.contries').append(block)
        
        }}
    if (select.value==='u'){
        dictionary.sort(function(a, b){
            return b[1] - a[1]
        })
        for(let i=0; i<dictionary.length; i++){
    
    
    
            const block = document.createElement('div')
            block.classList.add('block')

            const image = document.createElement('img')
            image.classList.add('img')
    
            const title = document.createElement('h2')
            title.textContent=dictionary[i][0]
            const price = document.createElement('h3')
            price.textContent=`Price: ${dictionary[i][1]}$`
            const descrip = document.createElement('h2')
            descrip.textContent=`Описание`
            const population = document.createElement('h4')
            population.textContent=`Население: ${dictionary[i][3]}`
            const language = document.createElement('h4')
            language.textContent=`Язык: ${Object.values(dictionary[i][2])}`
            const currencies = document.createElement('h4')
            currencies.textContent=`Валюта: ${Object.values(dictionary[i][4])}`
    
            image.src = dictionary[i][5]
            block.append(image)
            block.append(title)
            block.append(price)
            block.append(descrip)
            block.append(population)
            block.append(language)
            block.append(currencies)
    
    
    
            document.querySelector('.contries').append(block)
            
        }
    
    }
    if (select.value==='name'){
        dictionary.sort(function(a, b) {
            return a[0].localeCompare(b[0]);
        })
        for(let i=0; i<dictionary.length; i++){
    
    
    
            const block = document.createElement('div')
            block.classList.add('block')

            const image = document.createElement('img')
            image.classList.add('img')
    
            const title = document.createElement('h2')
            title.textContent=dictionary[i][0]
            const price = document.createElement('h3')
            price.textContent=`Price: ${dictionary[i][1]}$`
            const descrip = document.createElement('h2')
            descrip.textContent=`Описание`
            const population = document.createElement('h4')
            population.textContent=`Население: ${dictionary[i][3]}`
            const language = document.createElement('h4')
            language.textContent=`Язык: ${Object.values(dictionary[i][2])}`
            const currencies = document.createElement('h4')
            currencies.textContent=`Валюта: ${Object.values(dictionary[i][4])}`
    
            image.src = dictionary[i][5]
            block.append(image)
            block.append(title)
            block.append(price)
            block.append(descrip)
            block.append(population)
            block.append(language)
            block.append(currencies)
    
    
    
            document.querySelector('.contries').append(block)
            
        }
    
    }

})