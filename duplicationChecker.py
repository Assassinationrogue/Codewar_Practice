word = 'ixigo'
word_dummy = []
counter = 0
# just appending into the list
dummy_length = len(word_dummy)
word_dummyX = [word_dummy.append(word[i]) for i in range (len(word))]
while len(word_dummy) > 1:
    # to avoid duplication in check
    print(len(word_dummy))
    print(word_dummy[0])
    word_dummy.reverse()
    word_dummy.pop()
    word_dummy.reverse()
    counter+= 1 
    # count the word's length for a number
    wrd_length = len(word)
    print(word_dummy)

    for currNum in range(wrd_length):
#             #print(word[currNum])
        print(word[currNum], word_dummy[0])
#         print(word_dummy)
    
# except: 
#     pass
