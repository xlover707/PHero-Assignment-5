const searchMeals = () => {
    const mealsName = document.getElementById('meal-input').value;
    const mealsLatter = document.getElementById('meal-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsName}`
    const url2 = `https://www.themealdb.com/api/json/v1/1/search.php?f=${mealsLatter}`
    const url3 = url || url2
    fetch(url3)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));

}

const displayMeals = meals => {
    const mealContainer = document.getElementById('mealList');
    meals.forEach(meal => {
        const mealDiv =document.createElement('div');
        mealDiv.className = ''
        mealDiv.innerHTML = `
        <div>
        <img src="${meal.strMealThumb}" alt="">
        <h3 class="meal-name">${meal.strMeal}</h3>
        </div>

        `
        mealContainer.appendChild(mealDiv);
    })

}


// getMealsData();