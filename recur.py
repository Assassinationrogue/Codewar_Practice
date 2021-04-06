def sum_of_digit(n):
    assert n>=0 and int(n) == n , 'The number has to be a positive integer only!'
    if n == 0:
        return 0
    else: 

        return int(n%10) + sum_of_digit(int(n/10))

print(sum_of_digit(123))