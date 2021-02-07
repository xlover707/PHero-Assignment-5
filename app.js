// fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then(res => res.json())
//     .then(data => displayMeals(data.meals));

const apiBase = 'https://www.themealdb.com/api/json/v1/1/search.php?';

const getMealsData = mealName => {
    const url = `${apiBase}?s=${mealName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsDiv = document.getElementById('mealList');
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
            
            <h3 class="meal-name"> ${meal.strMeal} </h3>
            <p>${meal.strCategory}</p>
        
        `
        mealDiv.innerHTML = mealInfo;

        mealsDiv.appendChild(mealDiv);

    }
}
getMealsData();
// const createMeal = meal => {
//         const ingredients = [];

        // Get all ingredients from the object. Up to 20
        // for (let i = 1; i <= 20; i++) {
        //     if (meal[`strIngredient${i}`]) {
        //         ingredients.push(
        //             `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        //         );
        //     } else {
        //         // Stop if there are no more ingredients
        //         break;
        //     }
        // }

        // getMealName();
        // const searchBtn = document.getElementById('search_button');
        // searchBtn.addEventListener('click', () => {
        //     const inputCity = document.getElementById('strMeal').value;
        //     getWeatherData(inputCity)
        // })

        // const updateUI = data => {
        //     document.getElementById('show_city').innerText = data.strMeal || "Unknown Location!";
        //     //     document.getElementById('show_temperature').innerText = data.main.temp;
        //     //     document.getElementById('weather_status').innerText = data.weather[0].main;
        //     //     document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        //     //     document.getElementById('city').value = "";
        // }