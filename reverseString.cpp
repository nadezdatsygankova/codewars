#include <iostream>

using namespace std;
string reverseString(string str);
int main()
{
   string name = "world";
   name = reverseString(name);
   std::cout << name;


   return 0;
}



string reverseString(string str)
{
   int len = str.length();
   int n = len - 1;
   for (int i = 0; i < (len / 2); i++)
   {
      swap(str[i], str[n]);
      n = n - 1;
   }
   return str;
}