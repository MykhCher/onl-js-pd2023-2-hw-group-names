'use strict';

function checkGroup(array) {
    const pattern = /^(F[DME]|f[dme])(20\d{2})(-\d+)?$/;
    for(let i = 0; i < array.length-1; i++) {
        if (pattern.test(array[i])) {
            console.log(`Success: ${array[i]}`);
        } else {
            console.log(`Error: ${array[i]}`);
        }
    }
}

const arrGroups = [
    'FE2021-5',
    'Fe2020-2',
    'FD2021',
    'fD2022-1',
    'FE2020-3',
    'FD2020/2',
    'fe2021-3',
    'FD2020$5',
    'FE2008-52',
    'Fm2008-23',
    'FM2022-1',
];
checkGroup(arrGroups);
