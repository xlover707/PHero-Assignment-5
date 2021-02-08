// Meals Name or Latter wise Searching API
const searchMeals = async () => {
    const mealsName = document.getElementById('meal-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsName}`

    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMeals(data.meals);
    } catch (error) {
        displayError('Sorry to some problem OR Unknown Meals Searching occurred! Please try again...')
    }
}

// Meals Searching by Name and Latter Info Display
const displayMeals = meals => {
    const mealContainer = document.getElementById('mealList');
    mealContainer.innerHTML = ''; //Refresh Old Search Data
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
        <div>
            <img src="${meal.strMealThumb}" alt="" onclick="getMealDetails('${meal.strMeal}')">
            <h4 class="meal-name">${meal.strMeal}</h4>
        </div>
   
        `
        mealContainer.appendChild(mealDiv);
    })

}

// Meal Details API Link creating
const getMealDetails = async (name) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        createMeal(data.meals[0]);
    } catch (error) {
        displayError('Sorry to some problem OR Unknown Meals Searching occurred! Please try again...')
    }

}

// Creating of Meals Details 
const createMeal = (meal) => {
    const ingredients = [];
    // Get all ingredients from the object. Up to 20
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        } else {
            // Stop if no more ingredients
            break;
        }
    }
    const getMealDetailsDiv = document.getElementById('mealDetails');
        getMealDetailsDiv.innerHTML = `
		<div class="row">
			<div class="columns five">
				<img src="${meal.strMealThumb}" alt="Meal Image">
                ${meal.strMeal ? `<p><strong>Meal Name:</strong> ${meal.strMeal}</p>` : ''}
				${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
				${
					meal.strTags
						? `<p><strong>Tags:</strong> ${meal.strTags
								.split(',')
								.join(', ')}</p>`
						: ''
				}
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
			</div>
		</div>
	`
    ;

};

// Error Handler
const displayError = error => {
    const errorTag = document.getElementById('catch-error');
    errorTag.innerText = error;
}