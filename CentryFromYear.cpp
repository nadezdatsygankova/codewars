#include <string>
#include<iostream>

/*
return (year + 99) / 100;

*/
int centuryFromYear(int year)
{
   if (year % 100 == 0)
      return year / 100;
   else
      return (year / 100) + 1;
}

int main()
{
   std::cout << centuryFromYear(2000);

   return 0;
}