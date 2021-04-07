def power(base,expo):
    assert expo > 0 and expo == int(expo) ,'Numbers must be positive integer numbers'
    if expo == 0:
        return 1
    if expo == 1:
        return base
    else:
        return base * power(base,expo-1)

print(power(5,3))


# EXAMPLE
# progress 1:  5 * 5 (2) = 25 | base = 25;  (base = 5; expo = 3)
# progress 2: 25 * 5 (1) = 125 | base = 125; found it's break point! 