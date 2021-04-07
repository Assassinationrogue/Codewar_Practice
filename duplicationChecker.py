word = 'infexious'
word_dummy = []

# just appending into the list
word_dummyX = [word_dummy.append(word[i]) for i in range (len(word))]

# to avoid duplication in check
word_dummy.reverse()
word_dummy.pop()
word_dummy.reverse()

# count the word's length for a number
wrd_length = len(word)

for currNum in range(wrd_length):
    #print(word[currNum])
    
    for nxtNum in range (wrd_length):
        print(word[currNum] , word_dummy[nxtNum - 1])

print(word_dummy)    

