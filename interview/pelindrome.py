def is_palindrome(n):
    num_str = str(n)
    return num_str == num_str[::-1]

number = 121
if is_palindrome(number):
    print(f"{number} is a palindrome.")
else:
    print(f"{number} is not a palindrome.")
