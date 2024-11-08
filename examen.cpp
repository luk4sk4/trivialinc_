#include <stdio.h>
#include <conio.h>

int main()
{
	printf("HERE 1");
	int number;
	int count=0;
	int mayor=0;
	bool primo=false;
	
	printf("enter an integer (stop when zero): ");
	scanf("%i",&number);
	
	while(number!=0)
	{
		printf("here 2");
		printf("enter an integer (stop when zero): ");
		scanf("%i",&number);
		printf("here 3, %i", number);
		primo = false;
		while(number>10)//&&(number!=0))||(number!=2,3,5,7)
		{
		mayor=number%10;
		printf("%i", mayor);
			switch(mayor)
			{
				case 2:
				case 3:
				case 5:
				case 7:
						primo = true;
						break;
			}	
		number=number/10;
		}
		switch(number)
		{
			case 2:
			case 3:
			case 5:
			case 7:
				primo = true;
				break;		
		}
		if (primo == false){
			count++;
		}
	}
	
	printf("%i non prime figure numbers entered",count);
	
}