alphabets=[]
broken_word = []
word = 'Miami'
def popper(list):
    list.reverse()
    list.pop()
    list.reverse()

count = len(word)
for i in range(count):
    alphabets.append(word[i])
    broken_word.append(word[i])
   
# there will be two list
# first list will be checker
# second list for being checked
# first letter will always get popped from second list
# after checking the first letter of first list will be popped 
# while loop will keep track of the counter

while len(broken_word) >= 1:
    try:
        popper(broken_word)
        for i in range (len(alphabets)):
            print(broken_word[0],alphabets[0])
        popper(alphabets)

    except:
        pass
