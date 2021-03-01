#include <iostream>
#include <string> 
int opposite(int number)
{
   int i;
   if (number > 0)
   {
      std::string  newNumber;
      newNumber = "-" + std::to_string(number);
      i = std::stoi(newNumber);
   }
   else
   {
      i = -number;
   }
   return i;

   // easy desion 
   /*
   return -number;
   or return 
   number*-1;
   */
}

int main()
{
   std::cout << opposite(-3);
}