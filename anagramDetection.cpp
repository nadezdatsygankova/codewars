/*Author*/
#include <iostream>
#include <algorithm>
#include <string>
#include <iterator>
#include <cctype>
bool isAnagram(std::string test, std::string original);
using namespace std;

int main()
{
   std::cout << isAnagram("dumble", "bumble");

   return 0;
}


bool isAnagram(std::string test, std::string original) {
   int sizeTest = test.length();
   int sizeOriginal = original.length();

   if (sizeTest == sizeOriginal)
   {

      for (int i = 0; i < sizeTest; i++)
      {
         test[i] = toupper(test[i]);
         original[i] = toupper(original[i]);
      }
      std::sort(test.begin(), test.end());
      std::sort(original.begin(), original.end());

      if (test == original)
      {
         return true;
      }
      else
         return false;
   }
   else
      return false;

}