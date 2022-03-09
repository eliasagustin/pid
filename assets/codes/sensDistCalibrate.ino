// llamo a librerias
#include<Servo.h>
Servo myservo;

// defino los numeros de pins sensor ultrasonico
const int trigPinA = 9;
const int echoPinA = 10;
const int trigPinB = 6;
const int echoPinB = 5;

//defino las variables PID
int kp = 8; // seudo constantes porque van a variar con por interface "A FUTURO"
float ki = 0.1; // seudo constantes porque van a variar con por interface "A FUTURO"
int kd = 100; // seudo constantes porque van a variar con por interface "A FUTURO"

int periodoSeteado = 46; // guardado en kHz

double Setpoint= 26; // seteo la distancia de entrada

double acumError, tasaError, error, posicion;
double ultimoError = 0;
float PID_Total;
int PID_grados;

// define las variables
long duracionA;
long duracionB; 
long anterior1A = 0; // variable guarda registro en el tiempo
long anterior1B = 0;
float distanciaA; // para distancia en cm
float distanciaB; // para distancia en cm
float distanciaTotal;
float dist;
int distancia2A; // para distancia en mm
int distancia2B; // para distancia en mm

// define banderas para sensores ultrasonicos
boolean sensor_A = false;
boolean sensor_B = false;

//filtro paso bajo
float Y_A = 0;
float Y_B = 0;
float alpha = 0.5;
float S_A = Y_A;
float S_B = Y_B;
//===========

//==== Variables de tiempo ====/
unsigned long periodo = 0.0;
unsigned long tiempo = 0.0;
unsigned long tiempoAnt = 0.0; 
//=============================/

void setup() {
  Serial.begin(9600); // Comienza la comunicación serial
  pinMode(trigPinA, OUTPUT); // Defino trigPin como salida
  pinMode(echoPinA, INPUT); // Defino trigPin como entrada del eco
  pinMode(trigPinB, OUTPUT); // Defino trigPin como salida
  pinMode(echoPinB, INPUT); // Defino trigPin como entrada del eco
  
  tiempo = millis();
}

void loop(){
    periodo =  millis() - tiempo;
    if (periodo>periodoSeteado){
    tiempo = millis();
    obtieneDistancia(trigPinA, trigPinB, echoPinA, echoPinB);
  }
}

//obtieneDistancia(trigPinA, trigPinB, echoPinA, echoPinB);
float obtieneDistancia(int tP_A,int tP_B, int eP_A, int eP_B){
  
  // seteo las banderas para generar una salida estable de medicion
  sensor_A = false;
  sensor_B = false;
  while ((sensor_A == false) && (sensor_B == false)){
        // Limpia posible ruido del trigPin
        digitalWrite(tP_A, LOW);
        digitalWrite(tP_B, LOW);
        delayMicroseconds(2);
      
        // Seteo el trigPin on HIGH state for 10 micro segundos 
        // en otras palabras creo la señal, iniciando proceso de medicion en A
        digitalWrite(tP_A, HIGH);
        delayMicroseconds(10);
        digitalWrite(tP_A, LOW);
        
        // Leo la lectura devuelta por echoPin, que es la duracion de onda de sonido  en microsegundo returns the sound wave travel time in microseconds
        duracionA = pulseIn(eP_A, HIGH);
        if (duracionA<3000 and duracionA>150){ // max y min
          if (anterior1A == 0){
            anterior1A == duracionA;
            } else {
              if(abs(anterior1A-duracionA)<150){
                
                if(anterior1A>duracionA){
                    duracionA = duracionA + 150;
                  }else{
                    duracionA = duracionA - 150;
                    }
                anterior1A = duracionA;
                }
              } 
        distanciaA = (duracionA * 0.034 / 2);
        S_A = (alpha*distanciaA) + ((1-alpha)*S_A);
        sensor_A = true;
        }
        
        // inicia lectura del sensor ultrasonico B
        digitalWrite(tP_B, HIGH);
        delayMicroseconds(10);
        digitalWrite(tP_B, LOW);
        duracionB = pulseIn(eP_B, HIGH);
         if (duracionB<3000 and duracionB>150){ // max y min
          if (anterior1B == 0){
            anterior1B == duracionB;
            } else {
              if(abs(anterior1B-duracionB)<150){
                
                if(anterior1B>duracionB){
                    duracionB = duracionB + 150;
                  }else{
                    duracionB = duracionB - 150;
                    }
                anterior1B = duracionB;
                }
              } 
        distanciaB = (duracionB * 0.034 / 2);
        S_B = (alpha*distanciaB) + ((1-alpha)*S_B);
        sensor_B = true;
        }
        Serial.println("");
        Serial.print(" ,S_A: ");
        Serial.print(S_A,1);
        Serial.print(" ,S_B: ");
        Serial.print(S_B,1);
        
        //En el caso que la medicion esté fuera de rango dará error en las banderas
        if ((sensor_A == true) && (sensor_B == true)){
          
            //A partir de los 26 cm cambia el sensor de lectura por el lado mas cerca del carro
            if ((S_A>=26) && (S_B<26)){
                distanciaTotal = S_B;
              }else{
                distanciaTotal = 26+(26-S_A);
              }
             Serial.print("Distancia: ");
             Serial.println(S_B,1);
             return distanciaTotal;
          }
  }
}
