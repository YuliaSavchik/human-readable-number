let numberLibOne = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
} 
let numberLibTwo = {
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
}
let numberLibThree = {
    '100': 'one hundred',
    '200': 'two hundred',
    '300': 'three hundred',
    '400': 'four hundred',
    '500': 'five hundred',
    '600': 'six hundred',
    '700': 'seven hundred',
    '800': 'eight hundred',
    '900': 'nine hundred',
}
module.exports = function toReadable(number) {
    let r1 = Math.floor(number / 100);
    let r2 = Math.floor((number - (r1 * 100)) / 10);
    let rank2_2 = Math.floor((number - (r1 * 100)));
    let rank3 = number - r1 * 100 - r2 * 10;
    let rank1 = r1 * 100;
    let rank2 = r2 * 10;
    let th;
    let un;
    let hun;
    let thH;
    let thH2;
    let unH;
    if(number <= 19){
        for(let key in numberLibOne){
            if(number == key) return numberLibOne[key]
        }
    }
    else if(number >= 20 && number <= 99){
        for(let key in numberLibTwo){
            if(rank2 == key)
                th = numberLibTwo[key];
        }
        for(let key in numberLibOne){
            if(rank3 == key)
                un = numberLibOne[key];
            else if(rank3 == 0)
                return th;
        }
        return th + ' ' + un;
    }
    else if(number >= 100 && number <= 999){
        for(let key in numberLibThree){
            if(rank1 == key && rank2 == 0 && rank3 == 0){
                hun = numberLibThree[key];
                return hun;
            }
        }
        for(let key in numberLibThree){
            if(rank1 == key)
                hun = numberLibThree[key];
        }
        for(let key in numberLibOne){
            if(rank2_2 == key){
                thH2 = numberLibOne[key];
                return hun + ' ' +  thH2;
            }
        }
        for(let key in numberLibTwo){
            if(rank2 == key)
                thH = numberLibTwo[key];
            else if(rank2 >= 10 && rank2 <= 19)
                return hun + ' ' + thH2;
            else if(rank2 == 0)
                return hun;
        }
        for(let key in numberLibOne){
            if(rank3 == key)
                unH = numberLibOne[key];
            else if(rank3 == 0)
                return hun + ' ' + thH;
        }
        if(rank2_2 >=20)
            return hun + ' ' + thH + ' ' + unH;
    }
    else
        return 'Please enter a number between 0 and 999';
}
