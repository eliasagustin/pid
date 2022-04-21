#include <Servo.h>
Servo myservo;
int pos = 0;

void setup()
{

Serial.begin(9600);
while (!Serial);
Serial.println("-------------------------");
Serial.println("Cargando calibración....");
Serial.println("-------------------------");
myservo.attach(8);
Serial.println("-------------------------");
Serial.println("Ingrese angulo de 0 a 180");
Serial.println("-------------------------");

}

void loop() {
  
for(pos = 0; pos <= 180; pos += 1)
if (Serial.available())
{
  int state = Serial.parseInt();
    
if (state < 10)
{
Serial.print(">");
Serial.println(state);
Serial.println("comando inválido número demasiado bajo");

}

if (state >= 10 && state < 170)
{
  Serial.print(">");
  Serial.println(state);
  Serial.print("moviendo servo a ");
  Serial.print(state);
  Serial.println(" grados");
  myservo.write(state);
  
}
}
}
