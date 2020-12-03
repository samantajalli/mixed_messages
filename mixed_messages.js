'use strict';


function randNumberGenerator(num){
        return Math.floor(Math.random() * num)
}
const Messages = {
    first : ['The number you drew is 1', 
             'The number you drew is 2',
             'The number you drew is 3',
             'The number you drew is 4',
             'The number you drew is 5',
             'The number you drew is 6',
             'The number you drew is 7',
             'The number you drew is 8',
             'The number you drew is 9',
             'The number you drew is 10'],
    
    second : ['You won the jackpot! ',
              'You didn\'t win anything',
              'You won 5$! ',
              'You won 100$',
              'You won this message ',
              'You won a prize ',
               ' . . . You didn\'t win anything ',
               ' You won a pet from the pet store!',
               ' You won a pet and 100$'],

    third: [ 'It\'s sunny today so I\'ll go outside',
             'It\'s rainy today so staying indoors is better',
             'Today is foggy. I will go to the store',
             'Today is neutral weather. I\'ll think about what to do today',
             'It\'s hailing today! Whoa. . .',
             'It\'s hot but I want to go to the beach',
             'It\'s cold out but I\'m warm inside',
             'It\'s warm out but I\'m cold inside',
             'I\'m going to play tennis despite the weather',
             'Today\'ll be an inside day'
             ]
}
// Store 'today's draw' in an array
let todaysDraw = []

// Iterate over the object
for (let choice in Messages){
        let optionIdx = randNumberGenerator(Messages[choice].length)

        // Use the object's properties to customize the message being added to todaysDraw
        switch(choice){
                case 'first':
                        todaysDraw.push(`${Messages[choice][optionIdx]}`)
                        break
                case 'second':
                        todaysDraw.push(`${Messages[choice][optionIdx]}`)
                        break
                case 'third':
                        todaysDraw.push(`${Messages[choice][optionIdx]}`)
                        break
                default:
                        todaysDraw.push('Not enough information')
        }
}

function formatMessage(message){
        const formatted = todaysDraw.join('\n')
        console.log(formatted)
}

formatMessage(todaysDraw)

