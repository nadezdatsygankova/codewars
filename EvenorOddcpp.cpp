#include <string>
#include<iostream>
/*
Better solition:
return (num%2==0)?"Even":"Odd";

*/
std::string even_or_odd(int number)
{
   if (number % 2 == 0)
      return "Even";
   else
      return "Odd";
}

int main()
{
   std::string answer = even_or_odd(-1);
   std::cout << answer ;

   return 0;
}