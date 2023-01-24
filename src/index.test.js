const capitalize  = require('./task4.js');
const stringLength = require('./task1.js');
const reverseString = require('./task2.js');
const Calculator = require('./task3.js');
                        //    Task 1

describe('Example Test', () => {
    it('it should count the length of the string', () => {
            //   Arrange
            const stringInput = 'hey my';
           
            const expectedOutput = 6; // updated expected output

                //  Act
            const actualOutput = stringLength(stringInput);
                
                // Assert

            expect(actualOutput).toEqual(expectedOutput);

    })
})

describe('Example Test', () => {
    it('it should count length', () => {
            //   Arrange
            const stringInput = 'hey my';
            let actualOutput = '';
            let expectedOutput = '';
            if(stringInput.length >= 1 && stringInput.length < 10){
                   actualOutput = stringLength(stringInput);
                   expectedOutput = 6;
            }else{
                expectedOutput = 'error';
            }

                // Assert

            expect(actualOutput).toEqual(expectedOutput);

    })
})
                                        // Task 2
 describe('Expected test', () => {
    it('it should reverse the string', () => {
                    // Arrange
           const input = 'obed';
           const expected = 'debo';  
                    //    Act
                  actual = reverseString(input);

                  expect(actual).toEqual(expected);
    })
 })    
 
//  describe('Expected test', () => {
//     it('it should add a and b', () => {
//                         // Arrange
//            const a = 3;
//            const b = 4;
//            const expected = 7;  
//                     //    Act
//                   actual = Calculator.add(a,b);

//                   expect(actual).toEqual(expected);
//     })
//  })
 
describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        test('adds 1 + 2 to equal 3', () => {
            expect(calculator.add(1, 2)).toBe(3);
        });
        test('adds 2 + 3 to equal 5', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });
        test('adds 3 + 3 to equal 6', () => {
            expect(calculator.add(3, 3)).toBe(6);
        });
    });

    describe('subtract', () => {
        test('subtracts 2 - 1 to equal 1', () => {
            expect(calculator.subtract(2, 1)).toBe(1);
        });
        test('subtracts 3 - 2 to equal 1', () => {
            expect(calculator.subtract(3, 2)).toBe(1);
        });
        test('subtracts 4 - 3 to equal 1', () => {
            expect(calculator.subtract(4, 3)).toBe(1);
        });
    });

    describe('divide', () => {
        test('divides 6 / 2 to equal 3', () => {
            expect(calculator.divide(6, 2)).toBe(3);
        });
        test('divides 8 / 2 to equal 4', () => {
            expect(calculator.divide(8, 2)).toBe(4);
        });
        test('divides 9 / 3 to equal 3', () => {
            expect(calculator.divide(9, 3)).toBe(3);
        });
    });

    describe('multiply', () => {
        test('multiplies 2 * 3 to equal 6', () => {
            expect(calculator.multiply(2, 3)).toBe(6);
        });
        test('multiplies 3 * 4 to equal 12', () => {
            expect(calculator.multiply(3, 4)).toBe(12);
        });
        test('multiplies 4 * 5 to equal 20', () => {
            expect(calculator.multiply(4, 5)).toBe(20);
        });
    });
});

describe('Expected test', () => {
    it('Capitalize string', () => {
                    // Arrange
           const input = 'obed';
           const expected = 'Obed';  
                    //    Act
                  actual = capitalize(input);

                  expect(actual).toEqual(expected);
    })
 }) 










