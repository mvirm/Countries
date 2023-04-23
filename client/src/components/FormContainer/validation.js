const regexName = new RegExp('^[A-Z]+$', 'i');
const regexDuration = new RegExp("^[0-2][0-9]:[0-5][0-9]$")


const validation = (input) => {

    let time = input.duration;
    let hr = time.split(':')[0]
    let errors = {}

    
    
    if(!input.name) {errors.name = 'You must enter a name for the tourist activity'}
    else if(!regexName.test(input.name)) {errors.name = 'The name of the activity must not contain numbers or special characters'}
    else if(input.name.length < 3) {errors.name = 'The name of the activity must not have more than 3 characters'}
    else if(input.name.length > 25) {errors.name = 'The name of the activity is too long'}

    if(!input.difficulty) {errors.difficulty= 'You must choose a level of difficulty for the activity'}
    
    if(!input.duration) {errors.duration= 'You must assign a duration time for the activity'}
    if(!regexDuration.test(input.duration)) {errors.duration = 'The duration must have the format hh : mm'}
    console.log(regexDuration.test(input.duration));
    if(hr >= 12) {errors.duration= 'The duration cannot be greater than 11:59hr'}
    
    if(!input.season) {errors.season = 'You must choise the season in which the activity is carried out'}
    
    if(!input.countryId.length) {errors.countryId = 'You must indicate at least one country where the activity is carried out'}

    
 return errors
}

export default validation