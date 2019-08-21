const monthNumber = 7;
let monthName = null;
let monthDays = null;

let message = null;

switch (monthNumber) {
    case 1:
        monthName = 'January';
        monthDays = '31 Days';
        break;
    case 2:
        monthName = 'Febraury';
        monthDays = ' 28 daysin common year and 29 days in ;eap years';
        break;
    case 3:
        monthName = 'March';
        monthDays = '31 Days';
        break;
    case 4:
        monthName = 'April';
        monthDays = '30 Days';
        break;
    case 5:
        monthName = 'May';
        monthDays = '31 Days';
        break;
    case 6:
        monthName = 'June';
        monthDays = '30 Days';
        break;
    case 7:
        monthName = 'July';
        monthDays = '31 Days';
        break;
    case 8:
        monthName = 'August';
        monthDays = '31 Days';
        break;
    case 9:
        monthName = 'September';
        monthDays = '30 Days';
        break;
    case 10:
        monthName = 'October';
        monthDays = '31 Days';
        break;
    case 11:
        monthName = 'November';
        monthDays = '30 Days';
        break;
    case 12:
        monthName = 'December';
        monthDays = '31 Days';
        break;
    default:
        message='Error: input a number between 1 and 12';
        break;
}
if(monthName==null && monthDays==null){
    console.log(message);
}else{
    console.log(`${monthName} is the selected month and has ${monthDays}`);
}