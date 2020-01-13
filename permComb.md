combinations:   - order is not important
                - number of combinations of n objects taken r at a time = (n! / ((n-r)!r!))
                - to find total combinations, each result of the above needs to be added

permutations:   - an x-digit code, using n digits, if every digit can be used more than 1 time = n^x
                - (without repetition) - an x-digit code, using n digits, if every digit can be used only 1 time = (n! / (n-x)!)


to determine all permutations of n digits, if n = 4, (meaning permutations of 1, 2, 3, or 4 letters), use the "without repetition" permutation formula for each value of x as 1, 2, 3, and 4, and add them together (ie, n = 4 would be a results of 64 permutations)
