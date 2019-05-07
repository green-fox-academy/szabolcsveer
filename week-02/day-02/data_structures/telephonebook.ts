'use strict';

const telephoneBook: any = {
  'William A. Lathan':	'405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster':	'606-481-6467',
  'Amanda D. Newland':	'319-243-5613',
  'Brooke P. Askew':	'307-687-2982'}


  // What is John K. Miller's phone number?
  let johnsNumber = Object.values(telephoneBook['John K. Miller'])
  console.log(johnsNumber);

  // Whose phone number is 307-687-2982?

  let guessWho = Object.keys(telephoneBook)[4]
  console.log(guessWho);
  

  // Do we know Chris E. Myers' phone number?
  
  let doWeKnowChris = Object.keys(telephoneBook).map(function(keys:any,values:any){
    if(keys === 'Chris E. Myers'){
      console.log('We found Chris\' number!');
    }
    console.log('We don\'t have his number!');

  })