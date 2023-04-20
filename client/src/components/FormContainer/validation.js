const regexName = "^[a-zA-Z]{3,25}"

const validation = (input) => {
    //{name, difficulty, duration, season, countryId} ;
    let errors = {}

    if(!input.name) {errors.name = 'You must enter a name for the tourist activity'}
    // else if(!regexName.test(input.name)) {errors.name = 'The name of the activity must not contain numbers or special characters'}
    // else if(input.name.length < 3) {errors.name = 'The name of the activity must not have more than 3 characters'}
    // else if(input.name.length > 25) {errors.name = 'The name of the activity is too long'}

    if(!input.difficulty) {errors.difficulty= 'You must choose a level of difficulty for the activity'}
    else if(typeof input.difficulty !== 'number') {errors.difficulty = 'the difficulty level must be a number'}
    else if(input.difficulty < 1 || input.difficulty > 5) {errors.difficulty = 'The difficulty level must be in a range between 1 to 5'}

    if(!input.duration) {errors.duration= 'You must assign a duration time for the activity'}
    
    if(!input.season) {errors.season = 'You must choise the season in which the activity is carried out'}
    
    if(!input.countryId) {errors.countryId = 'You must indicate at least one country where the activity is carried out'}
    
 return errors
}

export default validation