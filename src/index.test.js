const stringLength = require('./index.js');

                        //    Task 1

describe('Example Test', () => {
    it('it should do something', () => {
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
    it('it should do something', () => {
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
