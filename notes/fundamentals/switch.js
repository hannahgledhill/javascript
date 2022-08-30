const day = 'monday';

switch (day) {
    case 'monday': // note this is a strict comparison ===
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples'); // this code would be executed if wednesday OR thursday
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('not a valid day');
}